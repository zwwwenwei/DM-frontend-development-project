import React, { useState, createContext, useEffect } from 'react';
import { fetchFreelanceAndDocuments, fetchEmploymentAndDocuments } from '../utils/firebase'

export const FreelanceContext = createContext(
    {
        job: {},
})

export const EmploymentContext = createContext(
    {
        job: {},
})

export const FreelanceProvider = ({ children }) => {
    const [job, setJob] = useState({})

    useEffect(() => {
        const fetchJobMap = async () => {
            const jobMap = await fetchFreelanceAndDocuments();
            //console.log(jobMap)
            setJob(jobMap)
        }
        fetchJobMap();
    }, [])
    const value = { job }

    /*const [currentJob, setcurrentJob] = useState(null);
    const value = { currentJob, setcurrentJob }*/
    return (
        <FreelanceContext.Provider value={value}>{children}</FreelanceContext.Provider>
    )
}

export const EmploymentProvider = ({ children }) => {
    const [job, setJob] = useState({})

    useEffect(() => {
        const fetchJobMap = async () => {
            const jobMap = await fetchEmploymentAndDocuments();
            //console.log(jobMap)
            setJob(jobMap)
        }
        fetchJobMap();
    }, [])
    const value = { job }

    /*const [currentJob, setcurrentJob] = useState(null);
    const value = { currentJob, setcurrentJob }*/
    return (
        <EmploymentContext.Provider value={value}>{children}</EmploymentContext.Provider>
    )
}
