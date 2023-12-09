import React from 'react'

const Login = () => {
  return (
    <div className='bg-[rgb(247,120,4)] relative flex flex-row justify-center items-center w-full h-screen'>

    <div className='flex flex-col md:w-2/4 sm:w-5/6 relative items-center border border-white text-white md:text-2xl sm:text-lg font-medium rounded-lg'>
        <h1 className='text-white text-3xl font-medium text-center m-10'>Signup!</h1>
        <form action="/signup" method='POST' className='sm:w-full'>
            <div className='mb-6'>
                <label htmlFor="userName">UserName:-   </label>
                <input type='text' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2 text-gray-200 font-light sm:w-3/6' placeholder='Tom' required></input>
            </div>
            <div className='mb-6'>
                <label htmlFor="password">Password:-   </label>
                <input type='password' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2 text-gray-200 font-light sm:w-4/6' placeholder='tom@gmail.com' required></input>
            </div>
          
            <div className='mb-6 text-center'>
                <input type='submit'  className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md p-2 cursor-pointer'></input>
            </div>
        </form>
    </div>
</div>
  )
}

export default Login