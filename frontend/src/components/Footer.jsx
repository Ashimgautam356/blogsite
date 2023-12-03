import React from 'react'
import {Link} from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='border-t border-black flex flex-col  items-center w-screen sm:pt-10  md:pt-20 md:pb-20 '>
      <div className='border-b border-black flex flex-row justify-between items-center sm:w-5/6 md:w-4/6 md:p-10 sm:pb-10'>
        <div>
          <h1 className='font-medium text-2xl'>
            <Link to='/'>Journal</Link>
          </h1>
        </div>
        <div className='font-medium text-xl flex flex-row sm:w-3/6  md:w-2/6 justify-around'>
          <p>Follow me </p>
          <h1><Link to='https://www.facebook.com/ashim.gautam.1000'><FaFacebookF /></Link></h1>
          <h1><Link to='https://github.com/Ashimgautam356'><FaGithub></FaGithub></Link></h1>
        </div>
      </div>
      <div className=' sm:w-4/6 md:w-3/6 mt-20'>
        <p>&copy; 2023 Journal. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer