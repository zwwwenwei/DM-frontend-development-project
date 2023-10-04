import React, {useState} from 'react'
import { deleteFreelanceAndDocument } from '../utils/firebase'
import './Delete.css'

function DeleteJob(){

    const [contact, setContact] = useState('')

    const handlechange = (event) => {
        setContact(event.target.value)
    }

    const handleSubmit = async() =>{
        try{
            await deleteFreelanceAndDocument(contact)
            console.log('delete successful: ', contact)
        }
        catch(error)
        {
            console.log('delete issue: ', error.message)
        }
    }

    return(
        <div>
            <h1>Delete Job</h1>

            <div className='delete-job'>
            <input
            style={{width:'200px'}}
            type='text'
            placeholder=' input title/position for delete job'
            onChange={handlechange}
            value={contact}
            />
            </div>
            <br></br>
            <button className='delete-button' onClick={handleSubmit}>delete job</button>
        </div>
    )
}

export default DeleteJob