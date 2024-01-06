import React from 'react'
import {Link} from 'react-router-dom'
import DOMPurify from "dompurify";


const EditorsPick = ({props}) => {
  return (
    <div className=' flex flex-col sm:w-5/6 p-5 w-4/6 h-5/6'>
        <div className=' w-full font-medium text-3xl mb-4'>
            <h1>EDITOR'S PICK</h1>
        </div>
        <div className=' flex flex-row w-full sm:flex-col justify-between'>

            {
                props?.map(post=>{
                    return(
                        <Link className=' md:w-3/12 sm:mt-7' key={post.id}>
                        <div className=' flex flex-col  w-full'>
                            <div className=''>
                                <img src={`/upload/${post.photo}`} alt="" className=' w-30 sm:w-full sm:h-36 h-28 object-cover object-center'/>
                            </div>
                            <div className='mt-1'>
                                <p className='font-bold text-2xl mt-3 mb-4 sm:mb-2'>{post.heading}</p>
                                <p dangerouslySetInnerHTML={{
                              __html: DOMPurify.sanitize(post?.details),
                              }} className='font-light text-sm h-20  overflow-hidden overflow-ellipsis'></p>
                            </div>
                        </div>
                        </Link>
                    )
                })
}
            
            

        </div>
        <div></div>
    </div>
  )
}

export default EditorsPick