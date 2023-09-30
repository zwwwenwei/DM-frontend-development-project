import React, { useState, useRef } from 'react'
import './Describe.css'
import './Project.css'
import './Experience.css'
import './NewJob.css'
import JobList from './EmploymentJobList'
import SearchJob from './EmploymentSearch'
import DeleteJob from './EmploymentDelete'
import Payment from './Payment'
import { createEmploymentDocFromAuth } from '../utils/firebase'

function Employment() {

    const browseButton = useRef()
    const handleUploadfileButton = () => {
        browseButton.current.click()
    }

    const [selectfile, setSelectFile] = useState(null)

    const handleUploadFile = (event) => {
        setSelectFile(event.target.files[0])

        const { name, value } = event.target
        setContact((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const[showImage, setShowImage] = useState(null)

    const handleShowImage = () => {
        setShowImage({selectfile})
    }

    const [contact, setContact] = useState({
        title_position: '',
        job_description: '',
        skills: '',
        project_length: '',
        min_payment: '',
        max_payment: '',
        working_houres: '',
        image: '',
        experienced_in: '', 
        for_at_least: ''
    })

    const { title_position, job_description, skills, project_length, min_payment, max_payment, working_houres, image, experienced_in, for_at_least } = contact
    console.log(contact);

    

    /**/

    const handlechange = (event) => {
        const { name, value } = event.target
        setContact((prevalue) => {
            return {
                ...prevalue,
                [name]: value
            }
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            //const { user } = await createAuthUserWithEmailAndPassword(email, password)
            await createEmploymentDocFromAuth({ title_position, job_description, skills, project_length, min_payment, max_payment, working_houres, image, experienced_in, for_at_least });
            //console.log(response)
        }
        catch (error) {
            console.log('error in post:', error.message)
        }
    }

    

    return (
        <div>

            

            {/* */}

            <div className="head">
                <p>Describe your job</p>
            </div>

            <div className="inputD1">
                <p>Title/Position</p>

                <input className="input"
                    name="title_position"
                    type="text"
                    onChange={handlechange}
                    value={contact.title_position}
                />
            </div>

            <div className="inputD2">
                <p>Job description</p>

                <input className="input"
                    name="job_description"
                    type="text"
                    onChange={handlechange}
                    value={contact.job_description}
                />
            </div>
            <br></br>

            <div className="inputD3">
                <p>Skills</p>

                <input className="input"
                    name="skills"
                    type="text"
                    placeholder="Please add skills that your job is required e.g., Java"
                    onChange={handlechange}
                    value={contact.skills}
                />
            </div>

            <div className="footer">
                <p>Developer will find your job based on the skills you added here.</p>
            </div>
            
            {/*
            //
            //
            //
            */}

            <div className="head">
                <p>Project Conditions</p>
            </div>

            <div className="inputP1">
                <p>Project length</p>

                <input className="input"
                    name="project_length"
                    type="text"
                    onChange={handlechange}
                    value={contact.project_length}
                />
            </div>

            <div className="inputP2">
                <p>Payment</p>
                <p className="min">Min</p>

                <input className="mininput"
                    name="min_payment"
                    type="text"
                    onChange={handlechange}
                    value={contact.min_payment}
                />

                <p className="max">Max</p>

                <input className="maxinput"
                    name="max_payment"
                    type="text"
                    onChange={handlechange}
                    value={contact.max_payment}
                />
            </div>

            <div className="inputP3">
                <p>Working hours</p>
                <input className="input"
                    name="working_houres"
                    type="text"
                    onChange={handlechange}
                    value={contact.working_houres}
                />
            </div>

            <div className="inputp4">
                <p>Add an image:</p>

                {/*<p className="fileName">{selectfile ? selectfile.name : ''}</p>*/}
                <p className="fileName">{contact.image}</p>
                
                <input className="input"
                    style={{ display: 'None' }}
                    type="file"
                    accept=".jpg, .png"
                    name="image"
                    onChange={handleUploadFile}
                    value={contact.image}
                    ref={browseButton} />

                <button className="browse" onClick={handleUploadfileButton}>Browse</button>
                    
            </div>

            <button className="upload" style={{ left: '930px' }} onClick={handleShowImage}>Upload</button>

            <br></br>
            <img src={showImage} alt="project"/>
            {/*<img src={selectfile} alt="project"/>*/}

            {/*
            //
            //
            //
            */}

            <div className="head">
                <p>Experience</p>
            </div>
            <div className="ex-text">
                <p>This section is designed based on the type of the job.</p>
                <p>It could be developed by conditional rendering.</p>
            </div>
            <div className="inputE2">
                <p className="no1">Experienced in</p>

                <input className="no1input"
                name="experienced_in"
                type="text"
                onChange={handlechange}
                value={contact.experienced_in}
                />

                <p className="no2">For at least</p>

                <input className="no2input"
                name="For_at_least"
                type="text"
                onChange={handlechange}
                value={contact.For_at_least}
                />
            </div>

            {/*
            //
            //
            //
            */ }
            <br></br>
            <br></br>
            <button className="post" onClick={handleSubmit}>Post</button>
            <Payment />
            <br></br>
            <br></br>
           
           <div className='search-delete'>
            <SearchJob />
            <DeleteJob />
            </div>
            <br></br>
            <br></br>
            <JobList  />
        </div>
    )
}

export default Employment