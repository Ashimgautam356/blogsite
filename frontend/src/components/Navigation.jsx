import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GoSearch } from "react-icons/go";
import { HiMiniBars3CenterLeft } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navigation = () => {
    const [displayMenu, setDisplayMenu]= useState(false)
  return (
    <div className=' fixed z-20 bg-mainbg text-secondbg flex flex-row  justify-between items-center  w-full h-12'>
        <div className='font-bold text-lg flex flex-row justify-between items-center sm:w-4/12'>
        <div className='md:hidden'>
            <button onClick={()=>{setDisplayMenu(true)}}>
            <HiMiniBars3CenterLeft></HiMiniBars3CenterLeft>
            </button>
            {
                displayMenu && (
                    <div className='w-full h-screen flex flex-col items-center bg-mainbg absolute top-0 left-0 p-5'>
                        <div className='w-full h-10 flex flex-row justify-between items-center border-b border-white'>
                            <div >
                                <h1 className='text-3xl font-medium'>JOURNAL</h1>
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
                        <div className='flex flex-col items-center border-r border-l border-white w-full  mt-7 text-xl font-thin '>
                            <h2 className=''>
                                <Link to="pursuits">Pursuits</Link>
                            </h2>
                        </div>
                    </div>
                )
            }
        </div>
           <Link to="/">
            <h1>JOURNAL</h1>
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
                <li className=' hover:text-white transition-all duration-1000'><Link to="/puruits">Pursuits</Link></li>
            </ul>
        </div>

        {/* search */}
        <div>
            <Link to="search" className='text-xl font-semibold'><GoSearch></GoSearch></Link>
        </div>
    </div>
  )
}

export default Navigation