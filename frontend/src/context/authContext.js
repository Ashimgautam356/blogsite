import React, { useEffect } from 'react'
import { createContext , useState } from 'react'
import Axios from 'axios'

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
        await Axios.post('user/logout')     
        setCurrentUser(null)
        
    }

    // for geting post 
    const posts = async()=>{
         return await Axios.get('user/posts/fetch').then(response => response.data);
                 
    }



    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])



    return (
        <AuthContext.Provider value={{currentUser,login,logout,posts}}>{children}</AuthContext.Provider>
    )
}