import React from 'react';
import { FolderPlusIcon } from '@heroicons/react/24/solid'
const Job = ({job}) => {
    console.log(job);
    const {id, job_title,company,location} = job;
    return (
        <div className="md:w-96 h-54 md:h-full bg-base-200 shadow-xl flex rounded-lg">
        
        <div className="flex justify-center items-center mt-16 ml-4 h-20 w-20 md:w-28 border border-white rounded-md p-2 ">
        <button className="bg-pink-300 w-10 h-10 rounded-full ">
        <FolderPlusIcon className= "w-5 ml-2"></FolderPlusIcon>
        </button>
        </div>
  <div className="card-body">
    <h2 className="text-xl">{company}</h2>
    <p className='text-2xl font-bold'> {job_title}</p>
    <p className='text-orange-500'>General</p>
    <p className=''>{location}</p>
    
  </div>
  <div className="p-4 text-white font-bold">
    <button className="bg-orange-600 lg:w-20 p-1 rounded-md hover:bg-orange-700">Apply</button>
    </div>
</div>
    );
};

export default Job;