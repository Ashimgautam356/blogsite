import React from 'react'
import test2 from '../../images/test2.jpg'
import { Link } from 'react-router-dom'


const Travel = () => {
  return (
    <div className=' flex flex-col sm:w-5/6 p-5 w-4/6 relative h-full'>
    <div className='w-full font-medium text-3xl mb-4 h-5/6'>
        <h1>
            <Link>Travel</Link>
        </h1>
    </div>
    <div className='flex md:flex-row sm:flex-col w-full justify-between h-full '>
        <div className='sm:w-full w-3/5 relative sm:mb-10 min-h-full'>
            <h1 className='absolute z-10 font-semibold text-4xl text-white top-3/4 sm:text-xl pl-2' >This is the heading of the image</h1>
            <img src={test2} alt="" className='w-full min-h-full object-cover object-center brightness-75'/>
        </div>
        <div className='flex flex-col sm:w-full w-2/6 '>
            <Link className='flex flex-row w-full   justify-between mb-10'>
                <div className='w-3/5 min-h-full  '>
                    <img src={test2} alt=""  className='h-full'/>
                </div>
                <div className='w-2/6'>
                    <h2 className='mb-3 text-red-800 font-semibold'>
                        <Link>News</Link>
                    </h2>
                    <h1 className='text-sm'>
                        <Link>This is the heading of the pic</Link>
                    </h1>
                </div>
            </Link>
            <Link className='flex flex-row  w-full   justify-between mb-10'>
                <div className='w-3/5 min-h-full  '>
                    <img src={test2} alt=""  className='h-full'/>
                </div>
                <div className='w-2/6 '>
                    <h2 className='mb-3 text-red-800 font-semibold'>
                        <Link>News</Link>
                    </h2>
                    <h1 className='text-sm'>
                        <Link>This is the heading of the pic</Link>
                    </h1>
                </div>
            </Link>
            <Link className='flex flex-row  w-full   justify-between'>
                <div className='w-3/5 min-h-full  '>
                    <img src={test2} alt=""  className='h-full'/>
                </div>
                <div className='w-2/6'>
                    <h2 className='mb-3 text-red-800 font-semibold'>
                        <Link>News</Link>
                    </h2>
                    <h1 className='text-sm'>
                        <Link>This is the heading of the pic</Link>
                    </h1>
                </div>
            </Link>
        </div>
    </div>
</div>
  )
}

export default Travel