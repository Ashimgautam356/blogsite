import React from 'react'
import test1 from '../../images/test1.jpg'
const Banner = () => {
  return (
    <div className=' sm:w-5/6 sm:flex-col sm:h-4/6  p-5 w-4/6 flex flex-row h-3/6'>

            <img className='object-cover object-center h-full w-4/6  sm:h-4/6 sm:w-full'  src={test1} alt="" />

        <div className='flex flex-col p-3 bg-black text-white justify-center min-h-full w-2/6 sm:h-2/6 sm:w-full'>
            <h1 className='text-3xl font-bold'>This is the heading of the Banner</h1>
            <h2 className='text-xl font-medium'>This is the sub heading of the banner</h2>
            <p className='font-light'>By: test</p>
        </div>
    </div>
  )
}

export default Banner