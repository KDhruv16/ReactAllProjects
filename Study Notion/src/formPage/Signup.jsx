import React, { useState } from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Form } from 'react-router';
import Template from '../components/Template';
import signupImg from "../assets/signup.png"
function Signup(props) {
      let loggedin = props.loggedin;
  let setLoggedin = props.setLoggedin;
  return (
    <div>
      <Template
       loggedin={loggedin} setLoggedin={setLoggedin}
        title="Join the millions learning to code with StudyNotion for free"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        image={signupImg}
        formType="signup"
        // setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
