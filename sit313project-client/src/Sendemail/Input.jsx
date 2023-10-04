import React from 'react'
import './Input.css'

const Input=(props) => {
    return(
    <div className="send-email-input">
        <input className="input-feield" name={props.name} type={props.type} value={props.value} onChange={props.onChange} placeholder={ props.placeholder} />
    </div>
    )

}
export default Input