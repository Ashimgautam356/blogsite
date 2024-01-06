import React from 'react'
import DOMPurify from "dompurify";


const Banner = ({props}) => {
  return (
    <>
    {
      props?.map(post=>{
        return(
          <div className=' sm:w-5/6 sm:flex-col sm:h-4/6  p-5 w-4/6 flex flex-row h-3/6' key={post.id}>

            <img className='object-cover object-center h-full w-4/6  sm:h-4/6 sm:w-full'  src={`/upload/${post.photo}`} alt="bannerimg" />

           <div className='flex flex-col p-3 bg-black text-white justify-center min-h-full w-2/6 sm:h-2/6 sm:w-full'>
            <h1 className='text-3xl font-bold p-2'>{post.heading}</h1>
            
            <p dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(post?.details),
              }} className='text-xl font-medium relative h-20 p-2 overflow-hidden whitespace-nowrap text-ellipsis '>
            </p>
            <p className='font-light p-2 uppercase'>By: {post.userName}</p>
            </div>
          </div>
        )
      })
    }
    
    </>
    
    
  )
}

export default Banner