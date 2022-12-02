import React from 'react'
import {useState,useContext,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import {store} from './App';
import axios from 'axios';
import Navbar from './Navbar';

const Maps = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState(null);
useEffect(()=>{
axios.get('http://localhost:5000/myprofile',{
    headers:{
        'x-token':token
    }
}
).then(res=>setData(res.data)).catch((err)=>console.log(err))
},[])
useEffect(()=>{ 
    const ifameData=document.getElementById("iframeId") 
    ifameData.src='https://maps.google.com/maps?q=$&hl=es;&output=embed' 
}) 
    if(!token)
    {
        return <Navigate to='/' />
    } 
  return (
    <div>
        <Navbar></Navbar>
         <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  )
}

export default Maps