import React, { useEffect, useState } from 'react';
import Job from './Job';
 

const Home = () => {
   const [jobs, setJobs] = useState([])
    
   useEffect(() => {
    fetch('joblists.json')
    .then(res => res.json())
    .then(data => setJobs(data))
   },[])

    
   
     
   

    return (
        <div className="my-container">
             <section className="search-part bg-slate-400 p-16 mt-10">
             <h1 className="text-center font-bold text-3xl">We offers <span className="text-purple-700 ">Thusands</span> of Jobs</h1>
             <div className=" md:flex lg:p-8">
             <input type="text" placeholder="Job Title" className="mx-4 my-4 w-50% p-4 w-full h-12" />
             <input type="text" placeholder="Location" className=" w-full mx-4 my-4 p-4 block h-12" />
             <button className=" h-12 w-64 md:w-96 bg-orange-600 mx-4 my-4 text-white rounded-md font-bold hover:bg-orange-700">SEARCH</button>
             </div>
             <h1 className="mx-4 md:mx-5 lg:mx-12">Browse job offers by Category or Location</h1>

              
             </section>

             <section className="jobs-listing mt-10">
               <h2 className="text-center font-bold text-3xl">Job listing</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
            {
                jobs.map(job => <Job job={job} key={job.id}></Job>)
            }
             </div>
             </section>
        </div>
    );
};

export default Home;