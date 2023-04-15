import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile} from 'firebase/auth'
import app from '../firebase/firebase.config';


const auth = getAuth(app);

const Signup = () => {
    const[error, setError] = useState('')
    const[success, setSuccess] = useState('')
    

    const handleSubmit =(event) => {
        //prevent page refresh
        event.preventDefault();
        setError('');
        setSuccess('');
        // collect form data
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value
        console.log(name, email, password);

         //Validation:
    if(!/(?=.*[A-Z])/.test(password)){
        setError('Please add at least one Uppercase');
        return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError('Please add at least two numbers');
        return;
    }
    else if(password.length < 6){
        setError('Please add at least 6 characters in your password');
        return;
    }
    else if(!/(?=.*[0-9].*[0-9])/.test(password)){
        setError('Please add at least two number');
        return;
      }

    else if(!/(?=.*[!@#$&*])/.test(password)){
        setError('Please add a special character!')
        return;
    }

    //create user in firebase
    createUserWithEmailAndPassword(auth, email, password)
    .then(resutl => {
        const loggedUser = resutl.user;
        console.log(loggedUser);
        event.target.reset();
        setError('')
        setSuccess('User has created successfully');
        sendVerificationEmail(loggedUser)

    })
    .catch(error => {
        console.log(error);
        if(error.code === 'auth/email-already-in-use'){
           setError('Email-already in use'); 
        }
    })

    }


    const sendVerificationEmail =(user) =>{
        sendEmailVerification(user)
        .then(result =>{
            console.log(result);
            alert('Please verify your email')
        })
    }

    const updateUserData =(user, name) =>{
         updateProfile(user, {
            displayName:name,
         })
         .then(()=>{
            console.log('User name update');
         })
         .catch(error=>{
            setError(error.message);
         })
    }


    return (
     <>
     <h2 className="text-center mt-4 mb-4 font-bold text-3xl ">Sign Up here</h2>
     <div className="my-container bg-white">
     <div className=" flex justify-center">
     <form onSubmit={handleSubmit} className="w-full max-w-sm ">
     <div className="md:flex md:items-center mb-6">
       <div className="md:w-1/3">
         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
           Full Name
         </label>
       </div>
       <div className="md:w-2/3">
         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" type="text" name="name" placeholder="Your Name" />
       </div>
     </div>
     <div className="md:flex md:items-center mb-6">
       <div className="md:w-1/3">
         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
          Email
         </label>
       </div>
       <div className="md:w-2/3">
         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Email" />
       </div>
     </div>

     <div className="md:flex md:items-center mb-6">
     <div className="md:w-1/3">
       <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline">
         Password
       </label>
     </div>
     <div className="md:w-2/3">
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline" name="password" type="password" placeholder="******************" />
     </div>
   </div>
     <div className="md:flex md:items-center">
       <div className="md:w-1/3"></div>
       <div className="md:w-2/3">
         <input className="shadow bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Sign Up" />
       </div>
     </div>
   </form>
   </div>
   <p className="flex justify-center mt-3">Already have account?<Link to='/login' className='text-orange-500 mx-1'> Login</Link></p>
   <p className=" flex justify-center text-orange-400 font-bold text-shadow mt-3">{error}</p>
   <p className='flex justify-center text-success font-bold text-shadow mt-3'>{success}</p>
     </div>
     
     </>
    );
};

export default Signup;