import React from 'react'
import Button from './Button'
import Input from './Input'
import './Sendemail.css'

function Sendemail(props) {
    return <div className="container">
        <div className="p">
        <p >{props.signup}</p>
        </div>

        <Input
            type="text"
            placeholder="Enter your email"
        />

        <Button
            type="submit"
            name="signup"
        />
            </div>
    
}
export default Sendemail

    /*< label for= "email" style = { "font-size: 25px; font-family: Impact"} > { props.signup }</label >
            
                <input name="email" id="email" type="text" placeholder="Enter your email" />
            
        <button type="submit" name="bmiCalculate" style="background-color: gray"> Subscribe</button>
        */