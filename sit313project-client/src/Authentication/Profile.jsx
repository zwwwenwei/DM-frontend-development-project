import React from 'react'
import { useEffect, useState } from 'react'
import {getAuth} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import CreateResume from '../AI/CreateResume'

function Profile()
{
    const auth = getAuth()
    const [user, setUser] = useState(null)
    const navigate = useNavigate()
    
    
    useEffect(()=> {
        setUser(auth.currentUser)
        console.log(auth.currentUser)
    }, [auth.currentUser])
    
    
    const onLogout = () => {
        auth.signOut()
        navigate('/')
    }

    return (
        <div>
            {user ? <h1>{user.email}</h1> : 'Not logged in'}
            
            <br></br>
            <CreateResume />
            <br></br>

            <button type="submit" onClick={onLogout}>sign out</button>
        </div>
    )

    //return user ? <h1>{user.email}</h1> : 'Not logged in'
}

export default Profile