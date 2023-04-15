import { getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../firebase/firebase.config';


const auth= getAuth(app)

const Login = () => {
    const[error, setError] = useState('')
    const[success, setSuccess] = useState('')
    const emailRef = useRef();



    const handleLogin =(event) =>{
        event.preventDefault();
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            event.target.reset();
            if(!loggedInUser.emailVerified){
               alert('You are verified')
            }
            setError('');
            setSuccess('User logged in successfully!');
        })
        .catch(error=>{
            console.log(error.message);
            if(error.code == 'auth/user-not-found' ){
                setError('User not found');
            }
        })
    }

  
    const handleResetPassword =() =>{
        console.log(emailRef.current.value);
        const email = emailRef.current.value;
        if(!email){
            alert('Please provide your  email address to reset password');
            return;
        }
        sendPasswordResetEmail(auth,email)
        .then(() => {
           alert('Please Check your email');
        })
        .catch(error => {
            console.log(error);
            setError(error.message);
        })

    }

    return (
     <>
     <h1 className="text-center mt-4 mb-4 font-bold text-3xl">Login Here</h1>
     <div className="my-container bg-white">
     <div className=" flex justify-center">
     <form onSubmit={handleLogin} className="w-full max-w-sm ">
  
     <div className="md:flex md:items-center mb-6">
       <div className="md:w-1/3">
         <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="email">
          Email
         </label>
       </div>
       <div className="md:w-2/3">
         <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="email" type="email" name="email" placeholder="Your Email" ref={emailRef} />
       </div>
     </div>

     <div className="md:flex md:items-center mb-6">
     <div className="md:w-1/3">
       <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="password">
         Password
       </label>
     </div>
     <div className="md:w-2/3">
       <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="password" name="password" type="password" placeholder="******************" />
     </div>
   </div>
     <div className="md:flex md:items-center">
       <div className="md:w-1/3"></div>
       <div className="md:w-2/3">
       <input className="shadow bg-orange-600 hover:bg-orange-700 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="submit" value="Login" />
       </div>
     </div>
   </form>
   </div>
    <Link className="flex justify-center  " href=""><p  onClick={handleResetPassword} className="text-orange-500 ">Forgot Password</p></Link>
   <p className="flex justify-center">Don't have account?<Link to='/signup' className='text-orange-500 mx-1'>Sign up</Link></p>
   <p className=" flex justify-center text-danger font-bold text-shadow">{error}</p>
<p className='flex justify-center text-success font-bold text-shadow'>{success}</p>
     </div>
     </>
    );
};

export default Login;