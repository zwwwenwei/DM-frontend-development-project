import React from 'react'
import './Button.css'

function Button(props) {
    return <div className="send-email-button">
        <button className="button-field" type={props.type} onClick={props.onClick} name={props.name}> Subscribe</button>
    </div>
}
export default Button