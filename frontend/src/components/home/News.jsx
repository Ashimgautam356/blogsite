import { Link } from 'react-router-dom'
import React, { useContext,useState,useEffect } from 'react'
import {AuthContext} from '../../context/authContext'

const News = () => {
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
    const g = gearPosts?.slice(0,4)
  return (
    <div className=' flex flex-col sm:w-5/6 p-5 w-4/6 relative h-full'>
        <div className='w-full font-medium text-3xl mb-4 h-5/6'>
            <h1>
                <Link>News</Link>
            </h1>
        </div>
        <div className='grid md:grid-rows-3 grid-cols-3 gap-10  w-full justify-between h-full '>
            {
                g.map((post,index)=>{
                    return ( index === 0 ? 
                    <Link className=' relative md:row-span-3 col-span-2 sm:col-span-3  sm:w-full  sm:mb-10 min-h-full ' key={index} to={`${post.cate}/${post.id}`}>
                        <img src={`upload/${post?.photo}`} alt="" className='w-full min-h-full object-cover object-center brightness-50 ' />
                        <h1 className='absolute  z-10 font-semibold text-5xl drop-shadow-[0_1px_5px_rgba(255,255,255,0.50)] text-white bottom-5 sm:bottom-3 min-h-max sm:text-xl pl-2'>
                            {post?.heading}
                        </h1>
                    </Link>
                :
                <Link className='md:row-span-1 col-span-1 sm:col-span-3 flex flex-row w-full justify-between mb-10' key={index} to={`${post.cate}/${post.id}`}>
                    <div className='w-3/5 min-h-full'>
                        <img src={`upload/${post.photo}`} alt="" className='h-full object-cover object-center ' />
                    </div>
                    <div className='w-2/6 '>
                        <h2 className='mb-3 text-red-800 font-semibold'>
                        <Link>News</Link>
                        </h2>
                        <h1 className='text-xs w-full  overflow-hidden whitespace-wrap '>
                        <Link>{post.heading}</Link>
                        </h1>
                    </div>
                </Link>)
                })  
            }
        </div>

    </div>
  )
}

export default News