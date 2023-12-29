import React, { useState } from 'react'
import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
const Signup = () => {
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [conPassword, setconPassword] = useState('')
    const [file , setFile] = useState(null)
    const [err,setErr] = useState('')    
    const navigate = useNavigate()
    
    
    const upload = async () => {

        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await Axios.post("uploads", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };



    const submitHandler = async(e)=>{
        e.preventDefault();
        const imgUrl = await upload();
        try{
            const response = await Axios.post('user/upload',{
                email:email,
                userName:userName,
                password:password,
                img: file? imgUrl: ''
            })

            if(response.data === 'User has been created.'){
            navigate('/login');
            }
        }
        catch(err){
            setErr(err.response.data)
        }    
    }

  return (
    <div className='bg-[rgb(247,120,4)] relative flex flex-row justify-center items-center w-full h-screen'>

        <div className='flex flex-col md:w-2/4 sm:w-5/6 relative items-center border border-white text-white md:text-2xl sm:text-xl font-medium rounded-lg'>
            <h1 className='text-white text-3xl font-medium text-center m-10'>Signup!</h1>
            <form  className='sm:w-full' method='/upload' action='POST'  onSubmit={submitHandler}>
                <div className='mb-6 sm:w-full'>
                    <label htmlFor="email">Email:-   </label>
                    <input type='email' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2  text-white font-light sm:w-4/6' placeholder='tom@gmail.com'  required value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="userName">UserName:-   </label>
                    <input type='text' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2 text-gray-200 font-light sm:w-4/6' placeholder='Tom' required value={userName}  onChange={(e)=>{setUserName(e.target.value)}}></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="password">Password:-   </label>
                    <input type='password' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2 text-gray-200 font-light sm:w-4/6' placeholder='tom@gmail.com' required value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="confirmPassword">Confirm:-   </label>
                    <input type='password' className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-300 p-2 text-gray-200 font-light sm:w-4/6' placeholder='tom@gmail.com' required value={conPassword} onChange={(e)=>{setconPassword(e.target.value)}}></input>
                </div>
                <div className='mb-6'>
                    <label htmlFor="file">Profile  </label>
                    <input type='file' id='profilePic' name='file' accept=".jpg, .png, .jpeg" className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md placeholder-gray-200 p-2 text-gray-200 font-light sm:w-4/6' onChange={(e)=>setFile(e.target.files[0])}></input>
                </div>
                <div className='mb-6'>
                    <p className='text-center text-red-800'>{err}</p>
                </div>
                <div className='mb-6 text-center'>
                    <button  className='focus:outline-none bg-[rgb(247,120,4)] border border-white rounded-md p-2 cursor-pointer' >Submit</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Signup