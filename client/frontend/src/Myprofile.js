import React from 'react'
import {useState,useContext,useEffect} from 'react'
import { Navigate } from 'react-router-dom';
import {store} from './App';
import axios from 'axios';
import Navbar from './Navbar';
import { Card,Typography,Button } from '@mui/material';
const Myprofile = () => {
   
    const [token,setToken]=useContext(store)
    const [data,setData]=useState(null);
useEffect(()=>{
axios.get('http://localhost:5000/myprofile',{
    headers:{
        'x-token':token
    }
}).then(res=>setData(res.data)).catch((err)=>console.log(err))
},[])
    if(!token)
    {
        return <Navigate to='/' />
    }
  return (
    <div>
       
        
      <Navbar></Navbar>
      <Card style={{flex:1,backgroundColor:"#805acb" }}>
      {
        data &&
        <center>
            <Typography variant='h2' style={{color:"whitesmoke",alignContent:"center"}}>Welcome come {data.username}</Typography>
            <br/>

           {/* <button onClick={()=>setToken(null)}>Logout</button>*/}
        </center>
}

<center>
<Typography variant='h5' style={{color:"whitesmoke",alignContent:"center"}}></Typography>

<Typography variant='h5' style={{color:"whitesmoke",alignContent:"center"}}>Have you seen our latest updates?</Typography>
<br/>
<Button href="/properties"  color='secondary'  style={{
        borderRadius: 35,
        backgroundColor: "#e7b9ff",
        padding: "18px 36px",
        fontSize: "18px"
    }}>Check out our updates</Button>
<br/>
</center>
</Card>
    </div>
  )
}

export default Myprofile