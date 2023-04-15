import React, { useState } from 'react';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="bg-gray-100 my-container">
        <div className="relative flex items-center justify-between">

        <Link to='/' className='inline-flex items-center'>
        <BoltIcon className="h-6 w-6 text-blue-500"></BoltIcon>
        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800">Job Board</span>
        </Link>

        
        <ul className=' hidden space-x-8 ml-4 lg:flex'>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/jobs'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Jobs
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/careerAdvice'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
          Career Advice
          </NavLink>
          </li>
         <li>
         <NavLink
         to='/sector'
         className={({ isActive }) => (isActive ? 'active' : 'default')}
       >
       Sectors
       </NavLink>
         </li>
       <li>
       <NavLink
       to='/login'
       className={({ isActive }) => (isActive ? 'active' : 'default')}
     >
     Login
     </NavLink>
       </li>
     <li>
     <NavLink
     to='/signup'
     className={({ isActive }) => (isActive ? 'active' : 'default')}
   >
   SignUp
   </NavLink>
 
     </li>
      </ul>
      <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>
                    <Link to='/' className='inline-flex items-center'>
                      <BoltIcon className='h-6 w-6 text-blue-500' />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                        Job Board
                      </span>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/jobs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Jobs
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/careerAdvice'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                      Career Advice
                      </Link>

                     </li>
                      <li>
                      <Link
                      to='/sector'
                      className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                    >
                    Sectors
                    </Link>
                      </li>



                     <li>
                     <Link
                     to='/login'
                     className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                   >
                   Login
                   </Link>
                     </li>

                      <li>
                      <Link
                        to='/signup'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                      Signup
                      </Link>

                      </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
        </div>
        </div>
    );
};

export default Header;