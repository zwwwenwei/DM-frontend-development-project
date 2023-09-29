import React from 'react'
import './Input.css'

function Input(props) {
    return(
    <div className="send-email-input">
        <input className="input-feield" type={props.type} placeholder={ props.placeholder} />
    </div>
    )

}
export default Input