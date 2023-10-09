import React from "react";
import { useEffect, useState } from "react";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { useNavigate } from "react-router-dom";

const TwoFA = () => {

    const auth = getAuth()
    const [user, setUser] = useState(null)

    const [code, setCode] = useState("");

    const [email, setEmail] = useState(null);
    
    const navigate = useNavigate();

    /*useEffect(()=> {
        setUser(auth.currentUser)
        console.log(auth.currentUser)
    }, [auth.currentUser])*/

    useEffect(() => {
        // Listen for changes in authentication state
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser); // Update the user state when authentication state changes
          setEmail(currentUser ? currentUser.email : null); // Update the email state
        });
        return () => unsubscribe();
}, [auth]);

    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    const handleSendCode = (e) => {
        e.preventDefault();

        fetch("http://localhost:3007/sendCode", {
        method: "POST",
        body: JSON.stringify({
            email: email   //send to backend
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error_message) {
                alert(data.error_message);
            } else {
                console.log('send')
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://localhost:3007/verification", {
        method: "POST",
        body: JSON.stringify({
            code: code
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((res) => res.json())
        .then((data) => {
            if (data.error_message) {
                alert(data.error_message);
            } else {
                // Navigates to the profile page
                navigate("/profile");
            }
        })
        .catch((err) => console.error(err));

        setCode("");
        
    };
    return (
        <div className='verify'>
            <h1>Verify your email {user ? <h1>{user.email}</h1> : 'Not logged in'}</h1>
            <button className = "verify_code" onClick={handleSendCode}>send verify code</button>
            <form className='verify__form' onSubmit={handleSubmit}>
                
                <input
                    type='text'
                    name='code'
                    id='code'
                    className='code'
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                />
                <button className='codeBtn'>AUTHENTICATE</button>
            </form>

            <br></br>

            <button type="submit" onClick={onLogout}>sign out</button>
        </div>
    );
};

export default TwoFA;