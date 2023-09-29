import React, {useState} from 'react'
import './Job.css'

function Job(props) {

    const [showMore, setShowMore] = useState('')

    const show = () => {
        setShowMore(
            <div>
            <p>Project length: {props.projectLength}</p>
        <p>Payment min: {props.minPayment}</p>
        <p>Payment max: {props.maxPayment}</p>
        <p>Working hours: {props.workingHoures}</p>
        <img src={props.image} alt="project" />
        <p>Experienced in:{props.experienced_in} </p>
        <p>For at least:{props.at_least} </p>
        </div>
        )
    }

    const hide = () => {
        setShowMore(
        <div><p></p></div>
        )
    }

    return (
    <div className='expand'>
        <p>Title/Position: {props.title_position}</p>
        <p>Job description: {props.jobDescription}</p>
        <p>Skills: {props.skills}</p>
        {showMore}

        <div>
        <button className='expand-button' onClick={show}>show more</button>
        </div>
        <div>
        <button className='expand-button' onClick={hide}>hide</button>
        </div>
        </div>

        
    )

    
}

export default Job