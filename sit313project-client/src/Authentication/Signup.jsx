import React, { useState } from 'react'
import Input from './Input'
import './Signup.css'
import { createAuthUserWithEmailAndPassword, createUserDocFromAuth } from '../utils/firebase'

const Signup = (props) => {
    const [contact, setContact] = useState({
        displayName: '',
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = contact

    console.log(contact);

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

        if (password !== confirmPassword) {
            alert('Passwords do not match')
            return;
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocFromAuth( user, { displayName });
            //console.log(user)
        }
        catch (error) {
            console.log('error in creating user', error.message)
        }
    }

    return (
        <div className='signup-div'>
        <h1>Create a DevLink Account</h1>
        <div className='signup-name'>
        
                <p>Name*</p>
                <Input
                name='displayName'
                type='text'
                //placeholder='name'
                onChange={handleChange}
                value={contact.displayName}
            />
            </div>

            <br></br>

            <div className='signup-email'>
                <p>Email*</p>
                <Input
                    name='email'
                    type='text'
                    //placeholder='email'
                    onChange={handleChange}
                    value={contact.email}
                />
            </div>

            <br></br>

            <div className='signup-password'>
                <p>Password*</p>
            <Input
                name='password'
                type='password'
                //placeholder='password'
                onChange={handleChange}
                value={contact.password}
                />
            </div>

            <br></br>

            <div className='signup-confirmPassword'>
                <p>Confirm password*</p>
            <Input
                name='confirmPassword'
                type='password'
                //placeholder='confirm password'
                onChange={handleChange}
                value={contact.confirmPassword}
                />
            </div>

            <br></br>

            <button className='signup-button' onClick={handleSubmit}>Create</button>

            <br></br>
            <br></br>


        </div>
    );
}
export default Signup