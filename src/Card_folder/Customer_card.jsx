import React from 'react'
import './Card.css'

const Readmore_card = (props) => {
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

export default Readmore_card