import React, {useState} from "react"

function CreateResume(){

    const [contact, setContact] = useState({
        name:'',
        email:'',
        address:'',
        phone:'',
        university:'',
        course:'',
        major:'',
        technical:'',
        project:'',
        employment:'',
        professionalDevelopment:'',
        activities:''
    })

    const [resume, setResume] = useState('')

    

    const[result, setResult] = useState('')

    const handleChange = (event) =>{
        const{name, value} = event.target
        setContact ((preValue)=>{         //input value
            return {
                ...preValue,
                [name]: value
            }
        })
    }

    const handleClick = async(e)=>{
        e.preventDefault();
        
        
        setResume('create a resume with these information: ',
        'name ',contact.name,
        'email ',contact.email,
        'address ',contact.address,
        'phone number ',contact.phone,
        'university ',contact.university,
        'course ',contact.course,
        'major ',contact.major,
        'technical skill ',contact.technical,
        'project experience ',contact.project,
        'employment ',contact.employment,
        'professional development ',contact.professionalDevelopment,
        'Extra-curricular Activities ',contact.activities
        )

        await fetch('http://localhost:3007/chatgpt', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body : JSON.stringify({
                resume: resume       //Send a request to the server & send to backend
            })
        })
        .then(response => response.json())
        .then(data => JSON.parse(data))
        .then((res) => {
            setResult(res.data)//send back to frontend
        })
        .catch((error) =>{
            console.log('print output error: ', error);
        })
    }

    return(
        <div>
            <h1>AI CREATE</h1>
            <p>name</p>
            <input
            name='name'
            type='text'
            onChange={handleChange}
            value={contact.name}
            />

            <p>email</p>
            <input
            name='email'
            type='text'
            onChange={handleChange}
            value={contact.email}
            />

            <p>address</p>
            <input
            name='address'
            type='text'
            onChange={handleChange}
            value={contact.address}
            />
            
            <p>phone</p>
            <input
            name='phone'
            type='text'
            onChange={handleChange}
            value={contact.phone}
            />
            
            <p>university</p>
            <input
            name='university'
            type='text'
            onChange={handleChange}
            value={contact.university}
            />
            
            <p>course</p>
            <input
            name='course'
            type='text'
            onChange={handleChange}
            value={contact.course}
            />
            
            <p>major</p>
            <input
            name='major'
            type='text'
            onChange={handleChange}
            value={contact.major}
            />
            
            <p>technical</p>
            <input
            name='technical'
            type='text'
            onChange={handleChange}
            value={contact.technical}
            />
            
            <p>project</p>
            <input
            name='project'
            type='text'
            onChange={handleChange}
            value={contact.project}
            />
            
            <p>employment</p>
            <input
            name='employment'
            type='text'
            onChange={handleChange}
            value={contact.employment}
            />

            <p>professionalDevelopment</p>
            <input
            name='professionalDevelopment'
            type='text'
            onChange={handleChange}
            value={contact.professionalDevelopment}
            />
            
            <p>activities</p>
            <input
            name='activities'
            type='text'
            onChange={handleChange}
            value={contact.activities}
            />

            <button onClick={(e) => handleClick(e)}>CREATE RESUME</button>

            <p>{result}</p>

        </div>
    )
}

export default CreateResume