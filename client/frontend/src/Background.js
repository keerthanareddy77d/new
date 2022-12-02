import { Button, Typography } from '@mui/material'
import React from 'react'
import backvideo from './assests/backvideo.mp4'
const Background = () => {
  return (
    <div className='app'>
             <video src={backvideo} autoPlay loop muted  />
        
        <div className="content">
<Typography variant='h4' style={{color:"whitesmoke",alignContent:"center"}}>To access all the features!!</Typography>
        <Button style={{
        borderRadius: 35,
        backgroundColor: "#b388ff",
        padding: "18px 36px",
        fontSize: "18px"
    }} href="/login"  variant="contained" >Login</Button><br/>

<br/>

        <Button style={{
        borderRadius: 35,
        backgroundColor: "#b388ff",
        padding: "18px 36px",
        fontSize: "18px"
    }} href="/register" color='success' variant="contained" >Register</Button>
     
        </div>

    </div>
  )
}

export default Background