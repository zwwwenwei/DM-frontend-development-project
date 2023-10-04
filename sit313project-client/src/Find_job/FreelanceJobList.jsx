import React, { useContext } from 'react'
import Job from './FreelanceJob'
import { FreelanceContext } from '../context/job.context'

function JobList(props) {

    
    /*const filteredJob = value.filter((job) => {
        return job.skills.toLowerCase().includes(props.searchJob.toLowerCase())
    })*/
    const { job } = useContext(FreelanceContext)
    console.log(job)

    return (
        <div>
            {Object.keys(job).map((name) => {
                //if(job[name].skills === props.searchJob)
                return(<Job
                    key={job[name].key} // Add a unique key
                    title_position={job[name].title_position}
                    jobDescription={job[name].job_description}
                    skills={job[name].skills}

                    projectLength={job[name].project_length}
                    minPayment={job[name].min_payment}
                    maxPayment={job[name].max_payment}
                    workingHoures={job[name].working_houres}
                    image={job[name].image}
                />
                )
            }
            )}
        </div>
    )
    
    
}

export default JobList