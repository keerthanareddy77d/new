import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom';
import {useState,createContext} from 'react';
import Nav from './Nav';
import Register from './Register';
import Login from './Login';
import Myprofile from './Myprofile';
import Footer from './Footer';
import { Feedback } from './Feedback';
import Background from './Background';
import Maps from './Maps';
import Properties from './Properties';
export const store=createContext();

const App = () => {
  const [token,setToken]=useState(null);
  return (
    <div className='App' >
      
      <store.Provider value={[token,setToken]}>
<BrowserRouter>
{!token &&
  <Nav/>
}

{!token &&
 
<Background></Background>
}
<Routes>
  <Route  path='/Register' element={<Register/>}/>
  <Route  path='/Login' element={<Login/>}/>
  <Route  path='/myprofile' element={<Myprofile/>}/>
  <Route  path='/feedback' element={<Feedback/>}/>
  <Route  path='/maps' element={<Maps/>}/>
  <Route  path='/properties' element={<Properties/>}/>
  <Route  path='/My-Profile' element={<Myprofile/>}/>


</Routes>
<Footer></Footer>

</BrowserRouter>
</store.Provider>


    </div>
  )
}

export default App