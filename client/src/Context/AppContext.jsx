import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [token,setToken] = useState('')
    const backendURL = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    useEffect(()=>{
        if(!token && localStorage.getItem('token')){
            setToken(localStorage.getItem('token'));
        }
    },[])
    
    useEffect(()=>{
        localStorage.setItem('token',token)
    },[token])

    const value = {
        backendURL,token,setToken, navigate
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

 export default AppContextProvider;