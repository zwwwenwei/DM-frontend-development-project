import React from 'react'
import './Card.css'

const Card = (props) =>
{
    return <div className='column'>
            <img src={props.avatar} alt="staff" />
    <h3>{props.name}</h3>
        <p>{props.position}</p>
        <div className='rating'>
            {props.star}
            {props.rating}
         </div>
    </div>
}

export default Card