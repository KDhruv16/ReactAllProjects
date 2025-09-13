import React, { useState } from 'react'
import Home from './components/Home';
import About from './components/About';
import Login from './formPage/Login';
import Signup from './formPage/Signup';
import { Route, Routes } from 'react-router';
import Navbar from"./components/Navbar"
import Logout from './formPage/Logout';
function App() {
  const[loggedin,setLoggedin] = useState(false);
  
  return (
    <div className='bg-[#000814] w-full text-white px-10 pt-3'>
      <Navbar loggedin={loggedin} setLoggedin={setLoggedin} />
  
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/login" element={<Login loggedin={loggedin} setLoggedin={setLoggedin}/>} />
        <Route path="/signup" element={<Signup loggedin={loggedin} setLoggedin={setLoggedin}/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  )
}

export default App
