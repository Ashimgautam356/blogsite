import React, { useContext,useState,useEffect } from 'react'

import test15 from '../images/test15.jpg'
import test10 from '../images/test10.jpg'
import {AuthContext} from '../context/authContext'
import DOMPurify from "dompurify";
import { Link } from 'react-router-dom';

const TravelPg = () => {
    const { posts } = useContext(AuthContext);
  const [gearPosts, setGearPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await posts();
        setGearPosts(fetchedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [posts]);
  
  // rending only the gear posts 
  const g = gearPosts.filter(post => post.cate === 'Travel' ).reverse()
  return (
    <div className='pt-16 relative flex flex-col items-center w-full'>
        <div className='font-bold text-5xl center'>
            <h1> Travel</h1>
        </div>
        <div className='font-medium text-lg p-4 w-4/6 sm:w-5/6'>
            <h2>Find expert travel tips, city guides, and hotel recommendations to plan your next weekend getaway or faraway adventure.  </h2>
        </div>
        <div className='w-full relative flex flex-row justify-center mb-10'> 
            <img src={test15} alt="" className='w-5/6'/>
        </div>

        <div className='relative flex flex-col items-center sm:w-5/6 p-5 w-4/6 h-3/6 mb-20'>
        <div className=' relative grid grid-cols-2 mb-10'>
 
 {
     g.map(post =>{
         return(
         <Link className='flex flex-row justify-between  md:w-4/6  col-span-2 relative h-full  pb-10 cursor-pointer' key={post.id } to={`/${post.cate}/${post.id}`}>
             <div className='h-full sm:h-full w-2/6 sm:w-2/6   relative flex flex-row justify-center items-center'>
                 <img src={`/upload/${post.photo}`} alt="" className=' w-full sm:w-full object-cover object-center min-h-full'/>
             </div>
             <div className=' sm:w-4/6 w-3/6 mr-2  sm:pl-3 '>
                 <h1 className='font-bold text-2xl pb-2 sm:text-xl'>{post.heading}</h1>
                 <p dangerouslySetInnerHTML={{
                   __html: DOMPurify.sanitize(post?.details),
                   }} className='p-4 relative overflow-hidden whitespace-nowrap text-ellipsis '></p>
             </div>
         </Link>
         )
     })
 }
</div>
        
    </div>
    </div>

  )
}

export default TravelPg