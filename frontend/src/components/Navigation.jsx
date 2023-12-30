import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from '../context/authContext';


const Navigation = () => {
    const {currentUser,logout} = useContext(AuthContext)
    const [displayMenu, setDisplayMenu]= useState(false)


  return (
    <div className=' fixed z-20 bg-mainbg text-secondbg flex flex-row  justify-between items-center  w-full h-12'>
        <div className='font-bold text-lg flex flex-row justify-between items-center sm:w-4/12'>
        <div className='md:hidden'>
            <button onClick={()=>{setDisplayMenu(true)}} className='p-2 mr-1'>
            <HiMiniBars3CenterLeft></HiMiniBars3CenterLeft>
            </button>
            {
                displayMenu && (
                    <div className='w-full h-screen flex flex-col items-center bg-mainbg absolute top-0 left-0 p-5'>
                        <div className='w-full h-10 flex flex-row justify-between items-center border-b border-white'>
                            <div>
                                <h1 className='text-3xl font-medium pl-10'>JOURNAL</h1>
                            </div>
                            <div className='text-2xl'>
                                <button onClick={()=>{setDisplayMenu(false)}}>
                                <RxCross2></RxCross2>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="/gear" >Gear</Link>
                            </h2>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="/fitness">Healt & Fitness</Link>
                            </h2>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="food">Food & Drink</Link>
                            </h2>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="style">Style</Link>
                            </h2>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="travel">Travel</Link>
                            </h2>
                        </div>
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="news">News</Link>
                            </h2>
                        </div>
                    </div>
                )
            }
        </div>
           <Link to="/" className='w-fit md:ml-6'>
            <h1 className=''>JOURNAL</h1>
           </Link>
        </div>
        <div className='w-3/6 h-full sm:hidden'>
            <ul className='flex flex-row flex-wrap  justify-evenly items-center h-full text-gray-300 font-semibold'>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/gear">Gear</Link></li>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/fitness">Healt & Fitness</Link></li>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/food">Food & Drink</Link></li>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/style">Style</Link></li>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/travel">Travel</Link></li>
                <li className=' hover:text-white transition-all duration-1000'><Link to="/news">News</Link></li>
            </ul>
        </div>

        {/* search */}
        <div className='flex flex-row justify-end md:w-1/4 sm:w-5/6  items-center '>
            {
                currentUser == null ? (
                <div>
                    <Link className='p-2' to='/login'>Login</Link>
                    <Link className='p-2' to="/signup">Signup</Link>
                </div>
                ) :(
                    <div className='flex flex-row justify-around items-center flex-wrap w-5/6'>
                        <Link className='text-xs' to={'/newPost'}>New Post </Link>
                        <h1 className='text-xs'>{currentUser.userName}</h1>
                        <Link className='text-xs' onClick={()=>{logout()}}>Logout</Link>       
                    </div>
                )
            }
            <Link to="search" className='text-xl font-semibold p-2 md:mr-4'><GoSearch></GoSearch></Link>
        </div>
    </div>
  )
}

export default Navigation