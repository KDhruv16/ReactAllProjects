import React, { useRef, useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Form, useNavigate } from 'react-router';

function SignUpForm(props) {
  let loggedin = props.loggedin;
  let setLoggedin = props.setLoggedin;
  let createPass = useRef(null);
  let confirmPass = useRef(null);
  let navigate = useNavigate();
  function submitHandler(e) {
    e.preventDefault();
    if (createPass.current.value != confirmPass.current.value) {
      toast.error("Wrong Password");
      return;
    }
    else {
      console.log("workingin sign");
      setLoggedin(!loggedin);
      toast.success("worked");
      navigate("/logout")
    }
  }
  const [x, setx] = useState("student");
  const [passVisisble, setPassVisible] = useState({ create: false, confirm: false });
  return (
    <div className='w-full max-w-[300px] mt-4 '>
      <div className="bg-[#161D29] text-[#AFB2BF] w-fit px-2 py-1 rounded-full mb-2 -mt-1">
        <button onClick={() => setx("student")} className={`${x === "student" ? "bg-[#000814] text-white" : ""} rounded-full px-2`}>Student</button>
        <button onClick={() => setx("instructor")} className={`${x === "instructor" ? "bg-[#000814] text-white" : ""} rounded-full px-2`}>Instructor</button>
      </div>
      <form action="" onSubmit={submitHandler}>
        { /* for first and last name  */}
        <div className='flex gap-x-4'>
          <label htmlFor="">
            <p className='text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]'>First Name <sup className='text-[#EF476F] '>*</sup></p>
            <input className='bg-[#161D29] rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
              required type="text" placeholder='Enter First Name' />
          </label>
          <label htmlFor="">
            <p className='text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]'>Last Name <sup className='text-[#EF476F] '>*</sup></p>
            <input className='bg-[#161D29] rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
              required type="text" placeholder='Enter Last Name' />
          </label>
        </div>

        <label htmlFor="">
          <p className='text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]'>Email Address <sup className='text-[#EF476F] '>*</sup></p>
          <input className='bg-[#161D29] rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
            required type="text" placeholder='Enter email address' />
        </label>

        <label>
          <p className='text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]'>Create Password <sup className='text-[#EF476F] '>*</sup></p>

          <input className='bg-[#161D29] relative rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
            required ref={createPass}
            type={passVisisble.create ? "text" : "password"}  // FIXED
            placeholder="Enter password"
          />

          <span className='absolute bottom-3 left-78' onClick={() => setPassVisible(prev => ({ ...prev, create: !prev.create }))}>
            {passVisisble.create ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>

        <label htmlFor="" className='relative'>
          <p className='text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]'>Confirm Password<sup className='text-[#EF476F] '>*</sup> </p>

          <input className='bg-[#161D29] relative rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
            required ref={confirmPass} type={passVisisble.confirm ? "text" : "password"}
            placeholder='Enter password' />
          <span className='absolute bottom-0.5 right-3' onClick={() => setPassVisible(prev => ({ ...prev, confirm: !prev.confirm }))}>
            {passVisisble.confirm ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
        </label>
        <button className='bg-[#FFD60A] py-[4px] px-[12px] w-full rounded-[8px] mt-6 font-medium text-[#000814]'>Create Account</button>
      </form>
    </div>
  )
}

export default SignUpForm
