import React, { useEffect } from 'react'
import { createContext , useState } from 'react'
import Axios, { AxiosHeaders } from 'axios'

export const AuthContext = createContext()

export const AuthContextProvider = ({children})=>{
    // for setting currentuser
    const [currentUser, setCurrentUser]= useState(JSON.parse(localStorage.getItem("user")) || null)

    // for login
    const login = async (inputs)=>{
        const response = await Axios.post('user/login',inputs)
        setCurrentUser(response.data)
        
    }


    // for logout
    const logout = async ()=>{  
        await Axios.post('/user/logout')     
        setCurrentUser(null)
        
    }

    // for geting all post 
    const posts = async()=>{
         return await Axios.get('/user/posts/fetch').then(response => response.data);
                 
    }

    // for making banner
    const makeBanner = async(postId)=>{
        return await Axios.put('/admin/makingbanner',postId)
    }

    // for removing banner
    const removingBanner =async(postId)=>{
        return await Axios.put("/admin/removingbanner",postId)
    }

    // for making editor Choice
    const makingEditorChoice =async(postId)=>{
        return await Axios.put("/admin/makingEditorChoice",postId)
    }
    // for removing banner
    const removingEditorChoice =async(postId)=>{
        return await Axios.put("/admin/removingEditorChoice",postId)
    }

    // for deleting particular post
    const removing = async(postId)=>{
        return await Axios.delete("/user/posts/delete",{data:{postId}})
    }


    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])



    return (
        <AuthContext.Provider value={{removing,currentUser,login,logout,posts,makeBanner,removingBanner,makingEditorChoice,removingEditorChoice}}>{children}</AuthContext.Provider>
    )
}