import React, { useContext, useState } from 'react'
import Job from './FreelanceJob'
import { EmploymentContext } from '../context/job.context'

function SearchJob(props) {
    const { job } = useContext(EmploymentContext);

    const [searchTerm, setSearchTerm] = useState('')

    const onSearchChange = (event) =>{
        setSearchTerm(event.target.value)
    }

/*const filteredJob = value.filter((job) => {
        return job.skills.toLowerCase().includes(props.searchJob.toLowerCase())
    })*/

const filteredJobs = Object.keys(job).filter((name) => {
  
  return job[name].title_position === searchTerm;
});


return (
    <div>
        <h1>Search Job</h1>

    <input
        type='text'
        placeholder='search job title/position'
        onChange={onSearchChange}
        value={searchTerm}
    />

        {filteredJobs.map((name) => {
            return(<Job
                key={job[name].key} // Add a unique key
                //key={index}
                title_position={job[name].title_position}
                jobDescription={job[name].job_description}
                skills={job[name].skills}
                projectLength={job[name].project_length}
                minPayment={job[name].min_payment}
                maxPayment={job[name].max_payment}
                workingHoures={job[name].working_houres}
                image={job[name].image}
                experienced_in={job[name].experienced_in}
                at_least={job[name].for_at_least}
            />
            )
            
        }
        )}
    </div>
)
}

export default SearchJob