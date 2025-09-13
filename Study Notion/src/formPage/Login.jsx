import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import Template from '../components/Template';
import loginImg from "../assets/login.png";

function Login(props) {
    let loggedin = props.loggedin;
  let setLoggedin = props.setLoggedin;
  return (
    <div>
      <Template
       loggedin={loggedin} setLoggedin={setLoggedin}
        title="Welcome Back"
      desc1="Build skills for today, tomorrow, and beyond."
      desc2="Education to future-proof your career."
      image={loginImg}
      formType="login"
      // setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Login
