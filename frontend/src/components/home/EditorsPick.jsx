import React from 'react'
import test1 from '../../images/test1.jpg'
import {Link} from 'react-router-dom'


const EditorsPick = () => {
  return (
    <div className=' flex flex-col sm:w-5/6 p-5 w-4/6 h-5/6'>
        <div className=' w-full font-medium text-3xl mb-4'>
            <h1>EDITOR'S PICK</h1>
        </div>
        <div className=' flex flex-row w-full sm:flex-col justify-between'>
            <Link className=' md:w-3/12 sm:mt-7'>
            <div className=' flex flex-col  w-full'>
                <div>
                    <img src={test1} alt="" />
                </div>
                <div className='mt-1'>
                    <p className='font-bold text-2xl mt-3 mb-4 sm:mb-2'>This is the Heading of The above Image</p>
                    <p className='font-light text-sm'>This is the sub heading of the above image which is little bit longer than heading. </p>
                </div>
            </div>
            </Link>
            <Link  className=' md:w-3/12 sm:mt-7'>
            <div className=' flex flex-col w-full'>
                <div>
                    <img src={test1} alt="" />
                </div>
                <div className='mt-1'>
                    <p className='font-bold text-2xl mt-3 mb-4 sm:mb-2'>This is the Heading of The above Image</p>
                    <p className='font-light text-sm'>This is the sub heading of the above image which is little bit longer than heading. </p>
                </div>
            </div>
            </Link>
            <Link className=' md:w-3/12 sm:mt-7'>
            <div className='flex flex-col w-full'>
                <div>
                    <img src={test1} alt="" />
                </div>
                <div className='mt-1'>
                    <p className='font-bold text-2xl mt-3 mb-4 sm:mb-2'>This is the Heading of The above Image</p>
                    <p className='font-light text-sm'>This is the sub heading of the above image which is little bit longer than heading. </p>
                </div>
            </div>
            </Link>
            
            

        </div>
        <div></div>
    </div>
  )
}

export default EditorsPick