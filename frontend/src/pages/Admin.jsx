import React, { useContext, useEffect, useState } from 'react'
import {AuthContext} from '../context/authContext'
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const Admin = () => {
    
    const navigate = useNavigate()
    const {currentUser,removing,posts,makeBanner,removingBanner,makingEditorChoice,removingEditorChoice } = useContext(AuthContext)
    const [allPost ,setAllPost] = useState()
    
    
        //creating states for number of totalCredit's and banner and to display it in admin page .
        const [totalCredit,setTotalCredit] = useState(0);
        const [banner,setBanner] = useState(false);

    useEffect(()=>{
        !currentUser?.typeOfUser && navigate("/login")
        currentUser?.typeOfUser !== "admin" && navigate("/")
        
        const fetchpost = async ()=>{
            try{
                const fetchedpost = await posts(); 
                setAllPost(fetchedpost)
            }
            catch(error){
                console.log(error)
            }
        }
        fetchpost();

        const editorChoiceCount = allPost?.filter(post => post.credit === 1).length || 0;
    const bannerCount = allPost?.filter(post => post.credit === 2).length || 0;
    setTotalCredit(editorChoiceCount);
    setBanner(bannerCount > 0);


    },[totalCredit,banner])

     // filtering how many post has been selected for editor choice

    // console.log(totalCredit,banner,allPost)


    // making editor choices
    const handelChoice = async(id)=>{
        try{
            const response = await makingEditorChoice({id})
            setTotalCredit(totalCredit +1)
        }catch(err){
            console.log(err)
        }
    }
    
    // making Banner
    const handleBanner = async(id)=>{
        try{
            const response = await makeBanner({id})
            setBanner(true)
        }catch(err){
            console.log(err)
        }
    }
    
    // handling delete
    const handleDelete = async(id)=>{
        try{
            const response = await removing({id},(err)=>{
                err && console.log(err)
            })
        }catch(err){
            console.log(err)
        }
    }

    // deleting all the posts.
    const deleteAll = async()=>{

    }

    // decreasing from editor choice 
    const decreasingChoice = async(id)=>{
        try{
            const response = await removingEditorChoice({id})
            setTotalCredit(totalCredit - 1)
        }catch(err){
            console.log(err)
        }
    }
    
    // decreasing from banner 
    const decreasingBanner = async (id)=>{
        try{
            const response = await removingBanner({id})
            setBanner(false)
        }catch(err){
            console.log(err)
        }
    }

  return (
    <div className='pt-16 flex flex-row justify-center items-center w-full'>
      <div className='relative flex flex-col items-center sm:w-5/6 p-5 w-4/6 h-3/6 mb-20'>
        <div className=' relative grid grid-cols-2 mb-10'>
 
            {
                allPost?.map(post =>{
                    return(
                    <div className='flex flex-row justify-between  md:w-4/6  col-span-2 relative h-full  pb-10'>
                        <div className='h-14 sm:h-full w-2/6 sm:w-2/6 relative flex flex-row justify-center items-center'>
                            <img src={`/upload/${post.photo}`} alt="" className=' w-full sm:w-full object-cover object-center h-full'/>
                        </div>
                        <div className=' sm:w-4/6 w-3/6 mr-2  sm:pl-3 '>
                            <h1 className='font-bold text-2xl pb-2 sm:text-xl'>{post.heading}</h1>
                            <h2 className='relative overflow-hidden whitespace-nowrap text-ellipsis '>{post.details}</h2>
                        </div>
                        <div className='flex flex-col '>
                            {
                                post.credit == 0 ?
                                <>
                                <button onClick={()=>handelChoice(post.id)} className='w-full  text-sm p-2 mb-2 bg-green-500 text-white font-medium rounded-md'>Editor's Choice</button>
                                <button onClick={()=>handleBanner(post.id)} className='w-full  text-sm p-2 mb-2 bg-orange-500 text-white font-medium rounded-sm'>Banner</button>
                                </>: post.credit == 1 ?
                                <>
                                    <button onClick={()=>decreasingChoice(post.id)} className='w-full  text-sm p-2 mb-2 bg-yellow-500 text-white font-medium rounded-md'>Remove editor choice</button>
                                    <button onClick={()=>handleBanner(post.id)}  className='w-full  text-sm p-2 mb-2 bg-orange-500 text-white font-medium rounded-md'>Banner</button>
                                </>:
                                 <button onClick={()=>decreasingBanner(post.id)} className='w-full  text-sm p-2 mb-2 bg-blue-500 text-white font-medium rounded-md'>Remove Banner</button>
                            }
                            <button onClick={()=>handleDelete(post.id)} className='w-full  text-sm p-2 mb-2 bg-red-500 text-white font-medium rounded-md'>Delete</button>
                        </div>
                    </div>
                    )
                })
            }
        </div>
    </div>

    </div>
  )

}

export default Admin