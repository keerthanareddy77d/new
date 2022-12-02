import React from 'react'
import {useState} from 'react'
import axios from 'axios'
import { Card } from '@mui/material'
import log from './assests/log.jpg'

const Register = () => {
    const [data,setData]=useState({
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/register',data).then(
            res => alert(res.data)
        )
    }
  return (
    <div>
                <Card style={{flex:1,backgroundImage: 'url('+log+')'}} >

        <center>
        <form onSubmit={submitHandler}>
<h3>Register</h3>
<input type="text" onChange={changeHandler} name="username" placeholder="User name"/><br/>
<input type="email" onChange={changeHandler} name="email" placeholder="email"/><br/>
<input type="password" onChange={changeHandler} name="password" placeholder="password"/><br/>
<input type="password" onChange={changeHandler} name="confirmpassword" placeholder="confirmpassword"/><br/>
<input type="submit" value="Register"/><br/>

          </form>
        </center>
        </Card>
    </div>
  )
}

export default Register