import React from 'react'

const Signup = () => {
  return (
    <div className='bg-[rgb(247,120,4)] relative flex flex-row justify-center items-center w-full h-screen'>

        <div className='flex flex-col w-2/4 relative items-center border border-white text-white text-2xl font-medium rounded-lg'>
            <h1 className='text-white text-3xl font-medium text-center m-10'>Signup!</h1>
            <form action="/signup" method='POST'>
                <div className='mb-6'>
                    <label htmlFor="email">Email:-   </label>
                    <input type='email' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light' placeholder='tom@gmail.com' required></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="userName">UserName:-   </label>
                    <input type='text' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light' placeholder='Tom' required></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="password">Password:-   </label>
                    <input type='password' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light' placeholder='tom@gmail.com' required></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="confirmPassword">Confirm Password:-   </label>
                    <input type='password' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light' placeholder='tom@gmail.com' required></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="confirmPassword">Profile  </label>
                    <input type='file' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light'></input>
                </div>
                <div className='mb-6 text-center'>
                    <input type='submit' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md p-2 cursor-pointer'></input>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup