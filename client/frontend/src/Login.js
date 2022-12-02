import React from 'react'
import {useState,useContext} from 'react'
import axios from 'axios'
import {store} from './App';
import { Navigate } from 'react-router-dom';
//import { Button,Typography,Link,TextField,Paper,Grid } from '@mui/material';
import { Card, CardMedia,TextField } from '@mui/material';
import log from './assests/log.jpg';

const Login = () => {
    const [token,setToken]=useContext(store)
    const [data,setData]=useState({
        email:'',
        password:'',
    })
    const changeHandler=e=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler=e=>{
        e.preventDefault();
        axios.post('http://localhost:5000/login',data).then(
            res => setToken(res.data.token)
        )
    }
    if(token){
        return <Navigate to='/myprofile'/>
    }
    //const paperStyle={padding :20,height:'70vh',width:280, margin:"20px auto"}
    //const btnstyle={margin:'8px 0'}
   // style={{flex:1, backgroundColor:'#b388ff'}}
  return (
    <div>
      <Card style={{flex:1,backgroundImage: 'url('+log+')'}} >
        <center>
        <form onSubmit={submitHandler}>
<h3>Login</h3>
<input type="email" onChange={changeHandler} name="email" placeholder="email"/><br/>
<input type="password" onChange={changeHandler} name="password" placeholder="password"/><br/>
<input type="submit" value="Login"/><br/>

          </form>
  </center>
  </Card>
  {/*<Paper elevation={10} style={paperStyle} onSubmit={submitHandler}>
                <Grid align='center'>
                    <h2 >Login</h2>
                    <br/>
                </Grid>
                <TextField onChange={changeHandler} name='email' placeholder='Enter email' fullWidth required/>
                <TextField onChange={changeHandler} name='Password' placeholder='Enter password' type='password' fullWidth required/>
                
                <Button  type='submit' color='secondary' variant="contained" style={btnstyle} fullWidth>login in</Button>

                <Typography >
                     <Link href="#" >
                     <br/>
                        Forgot password ?
                </Link>
                
                </Typography>
                <br/>
                <Typography > Do you have an account ?
                     <Link href="/sign-up" >
                        Sign Up 
                </Link>
                </Typography>
               
</Paper>*/}
        
    </div>
  )
}

export default Login