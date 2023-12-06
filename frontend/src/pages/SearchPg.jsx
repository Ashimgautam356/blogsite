import React from 'react'
import { GoSearch } from "react-icons/go";


const SearchPg = () => {
  return (
    <div className=' pt-16 relative flex flex-col items-center w-full mb-16'>   
        <div className='w-5/6 text-center h-5/6 flex flex-row justify-center'>
            <input type="text"  className='w-4/6 min-h-5/6 text-4xl p-4 border border-gray-500' />
            <button className='text-4xl bg-red-600 text-white p-4 '><GoSearch></GoSearch></button>
        </div>
    </div>
  )
}

export default SearchPg