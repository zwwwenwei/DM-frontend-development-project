import React, { useState } from 'react';
import './NewJob.css'
import Employment from './Employment';
import Freelance from './Freelance';

function NewJob(props) {
    /*const [freelanceoption, setfreelanceoption] = useState(null)
    const handleClick = () => {
        setfreelanceoption(<>
            <Describe
                head="Describe your job"
                footer="Developer will find your job based on the skills you added here."
            />
            <Project
                head="Project Conditions"
            />
            <Experience
                head="Experience"
            />
        </>)
    }*/

    const [showcontent, setshowcontent] = useState(false)/*initial*/
    const show = () => {
        setshowcontent(true)
    }
    const hide = () => {
        setshowcontent()
    }

    return (
        <div>
            <p className="newjob">{props.head}</p>
            <div className="select">
                <p>Select job type:</p>

                
                <button className="select1" onClick={hide} style={{ backgroundColor: showcontent ?/*boolean*/ "white"/*True*/ : "black"/*False*/ }}></button>
                <p className="freelance">Freelance</p>
                
                
                <button className="select2" onClick={show} style={{ backgroundColor: showcontent ?/*boolean*/ "black"/*True*/ : "white"/*False*/ }}></button>
                    <p className="employment">Employment</p>
            </div>
            
            {/*if statement*/}{showcontent ? (<Employment ></Employment>/*true*/) : (<Freelance></Freelance>/*false*/)}
            
        </div>
    )
}
export default NewJob