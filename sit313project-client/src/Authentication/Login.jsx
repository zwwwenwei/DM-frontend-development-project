import React, { useState } from 'react'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { signinAuthUserWithEmailAndPassword } from '../utils/firebase'



const Login = (props) => {
    
    const [contact, setContact] = useState({
        email: '',
        password: ''
    })

    const { email, password } = contact
    
    const Navigate = useNavigate()


    const handleChange = (event) => {
        const { name, value } = event.target
        setContact((preValue) => {
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await fetch('http://localhost:3007/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                username: contact.email,
                password: contact.password
            })
        })
        .then(response => response.json())
        //.then(data=> console.log(data))
        .then(data => JSON.parse(data))
        .catch(err =>{
            console.log("Error:" + err)
        })

        try {
            const response = await signinAuthUserWithEmailAndPassword(email, password);
            console.log(response);
            Navigate('/TwoFA')
        }
        catch (error) {
            console.log('error in login', error.message)
        }
    }

    return <div className='signin-div'>

        <br></br>

        <Link to='/CreateAccountPage'>
        <button className='signup-instead'>
                Sign up
            </button>
            </Link>
        

        <br></br>

        <div className='signin-email'>

        <p>Your email</p>

            <Input
            name='email'
            type='text'
            //placeholder='email'
            onChange={handleChange}
            value={contact.email}
            />
        </div>

        <br></br>

        <div className='signin-password'>
        <p>Your password</p>
        <Input
            name='password'
            type='password'
            //placeholder='password'
            onChange={handleChange}
            value={contact.password}
            />
        </div>
        
        <br></br>
        <br></br>

        <button className="signin-button" onClick={handleSubmit}>
            Login
        </button>

        <br></br>
        <br></br>

    </div>

}
export default Login