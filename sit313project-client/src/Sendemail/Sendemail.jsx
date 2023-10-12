import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'
import './Sendemail.css'

function Sendemail(props) {

    const [contact, setContact] = useState({
        email:''
    })

    const handleChange = (event)=>{
        const {name, value} = event.target
        setContact ((preValue)=>{  
        return {
        ...preValue,
        [name]: value
        }
        })
    }

    /*const handleClick =async()=>{
        await fetch('http://localhost:3007/', {
            method:'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                email: contact.email
            })
        })
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .catch(err =>{
            console.log("Error:" + err)
        })

    }*/
    const handleClick = async()=>{
        await fetch('http://localhost:3007/sendEmail', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                email: contact.email
            })
        })
        .then(response => response.json())
        //.then(data=> console.log(data))
        .then(data => JSON.parse(data))
        .catch(err =>{
            console.log("Error:" + err)
        })
    }

    return <div className="container">
        <div className="p">
        <p >{props.signup}</p>
        </div>

        <Input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={contact.email}
            onChange={handleChange}
        />

        <Button
            type="submit"
            name="signup"
            onClick={handleClick}
        />
            </div>
    
}
export default Sendemail

    /*< label for= "email" style = { "font-size: 25px; font-family: Impact"} > { props.signup }</label >
            
                <input name="email" id="email" type="text" placeholder="Enter your email" />
            
        <button type="submit" name="bmiCalculate" style="background-color: gray"> Subscribe</button>
        */