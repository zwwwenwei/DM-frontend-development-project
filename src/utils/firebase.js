// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import {getFirestore, doc, getDoc , setDoc, collection, query, getDocs, deleteDoc } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyC86StPuiyHqB_4v9EOt3_L8B_lC-HP4Wg",
authDomain: "sit313week7.firebaseapp.com",
projectId: "sit313week7",
storageBucket: "sit313week7.appspot.com",
messagingSenderId: "837573382865",
appId: "1:837573382865:web:0d55afb5f8f9b17da62bf0",
measurementId: "G-H50XTCBZ5P"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);


    const userSnapshot = await getDoc(userDocRef);


    if (!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createDate = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createDate,
                ...additionalInformation
            })

        }
        catch (error) {
            console.log('error in creating', error.message)
        }
    }
    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signinAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password)
}

/*
//
//
//
*/


export const createFreelanceDocFromAuth = async (job, additionalInformation = {}) => {
    if (!job) return;
    
    const jobDocRef = doc(db, 'freelance', job.title_position);

    const { title_position, job_description, skills, project_length, min_payment, max_payment, working_houres, image } = job;

    try {
        await setDoc(jobDocRef, {
            title_position,
            job_description,
            skills,
            project_length,
            min_payment,
            max_payment,
            working_houres,
            image,
            ...additionalInformation
        })

    }
        catch (error) {
            console.log('error in creating', error.message)
        }
    return jobDocRef;
}

export const createEmploymentDocFromAuth = async (job, additionalInformation = {}) => {
    if (!job) return;
    
    const jobDocRef = doc(db, 'employment', job.title_position);

    const { title_position, job_description, skills, project_length, min_payment, max_payment, working_houres, image, experienced_in, for_at_least } = job;

    try {
        await setDoc(jobDocRef, {
            title_position,
            job_description,
            skills,
            project_length,
            min_payment,
            max_payment,
            working_houres,
            image,
            experienced_in,
            for_at_least,
            ...additionalInformation
        })

    }
        catch (error) {
            console.log('error in creating', error.message)
        }
    return jobDocRef;
}

export const fetchFreelanceAndDocuments = async () => {
    const collectionRef = collection(db, 'freelance')
    const q = query(collectionRef)                     /*search database*/
    const querySnapshot = await getDocs(q);
    const jobMap = querySnapshot.docs.reduce((acc, docSnapshot) => {    /*???*/
        const { name, ...items } = docSnapshot.data();
        acc[name] = items
        return acc;
    }, {})
    return jobMap;
}

export const fetchEmploymentAndDocuments = async () => {
    const collectionRef = collection(db, 'employment')
    const q = query(collectionRef)                     /*search database*/
    const querySnapshot = await getDocs(q);
    const jobMap = querySnapshot.docs.reduce((acc, docSnapshot) => {    /*???*/
        const { name, ...items } = docSnapshot.data();
        acc[name] = items
        return acc;
    }, {})
    return jobMap;
}

export const deleteFreelanceAndDocument = async (job) => {
    const title_position = job
    try{
        await deleteDoc(doc(db, "freelance", title_position))
    }
    catch(error)
    {
        console.log('error in delete: ', error.message)
    }
    
}

export const deleteEmploymentAndDocument = async (job) => {
    const title_position = job
    try{
        await deleteDoc(doc(db, "employment", title_position))
    }
    catch(error)
    {
        console.log('error in delete: ', error.message)
    }
    
}