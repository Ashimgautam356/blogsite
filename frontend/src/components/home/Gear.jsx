import React, { useContext,useState,useEffect } from 'react'
import test65 from '../../images/test65.jpg'
import { Link } from 'react-router-dom'
import {AuthContext} from '../../context/authContext'



const Gear = () => {

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
    const g = gearPosts.filter(post => post.cate === 'gear' )

  return (
    <div className=' flex flex-col sm:w-5/6 p-5 w-4/6 relative h-full'>
        <div className='w-full font-medium text-3xl mb-4 h-5/6'>
            <h1>
                <Link>Gear</Link>
            </h1>
        </div>
        <div className='flex md:flex-row sm:flex-col w-full justify-between h-full '>
            <div className='sm:w-full w-3/5 relative sm:mb-10 min-h-full'>
                <h1 className='absolute z-10 font-semibold  text-4xl text-white top-3/4 sm:text-xl pl-10'>
                    {g[0]?.heading}
                </h1>
                <img src={`../upload/${g[0]?.photo}`} alt="" className='w-full min-h-full object-cover object-center brightness-50' />
            </div>
            <div className= 'flex flex-col sm:w-full w-2/6'>
                {
                    g.map((post,index)=>{
                       return (index !== 0 ?
                            <Link to={`/${post.cate}/${index}`} className='flex flex-row w-full justify-between mb-10'>
                                <div className='w-3/5 min-h-full'>
                                    <img src={`../upload/${post?.photo}`} alt="" className='h-full' />
                                </div>
                                <div className='w-2/6'>
                                    <h2 className='mb-2 text-red-800 font-semibold text-lg'>
                                    <Link to={`/${post.cate}/${index}`}>News</Link>
                                    </h2>
                                    <h1 className='text-xl font-bold'>
                                    <Link to={`/${post.cate}/${index}`}>{post?.heading}</Link>
                                    </h1>
                                </div>
                            </Link>
                        : "")
                    })
                }
            </div>         
        </div>
    </div>
  )
}

export default Gear