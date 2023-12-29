import React, { useContext,useState,useEffect } from 'react'
import test11 from '../images/test11.jpg'
import test10 from '../images/test10.jpg'
import {AuthContext} from '../context/authContext'


const GearPg = () => {

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
    const g = gearPosts.filter(post => post.cate === 'gear' ).reverse()

  return (
    <div className='pt-16 relative flex flex-col items-center w-full'>
        <div className='font-bold text-5xl center'>
            <h1>Gear</h1>
        </div>
        <div className='font-medium text-lg p-4 w-4/6 sm:w-5/6'>
            <h2>Read field-tested reviews of the best tech, gadgets, and gear—from your next e-bike or Maserati to the best jackets, joggers, and running shoes.</h2>
        </div>
        <div className='w-full relative flex flex-row justify-center mb-10'> 
            {/* <img src={test11} alt="" className='w-5/6'/> */}
        </div>

        <div className='relative flex flex-col items-center sm:w-5/6 p-5 w-4/6 h-3/6 mb-20'>
        <div className='grid grid-cols-2'>

            {
                g.map(post =>{
                    return(
                        <div className='flex flex-row justify-between  md:w-4/6  col-span-2 relative h-fit border-b border-black mb-6 pb-3'>
                        <div className='min-h-full w-4/6 sm:w-2/6 relative'>
                            {/* <img src={`../upload/${post.photo}`} alt="" className='min-h-full w-5/6  sm:w-full   object-cover object-center'/> */}
                        </div>
                        <div className=' sm:w-4/6 mr-2  sm:pl-3'>
                            <h1 className='font-bold text-2xl pb-2'>{post.heading}</h1>
                            <h2 className=''>{post.details}</h2>
                        </div>
                    </div>
                    )
                })
            }
        </div>
        <div className='w-1/5 bg-black text-white text-center p-3 shadow-mine'>
            <button>See More</button>
        </div>
    </div>
    </div>
  )
}

export default GearPg