import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router';

function LoginForm(props) {
   let loggedin = props.loggedin;
  let setLoggedin = props.setLoggedin;
  let navigate = useNavigate();
  const[passVisisble,setPassVisible] = useState(false);
  function submitHandler(e){
    console.log("working");
    e.preventDefault();
    setLoggedin(!loggedin);
    toast.success("worked");
     navigate("/logout")
  }
  return (
    <div className='w-full max-w-[300px] mt-4'>
      <form action="" onSubmit={submitHandler}>

        <label htmlFor="" className='mb-5'>
        <p className="text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]">Email Address <sup className='text-[#EF476F] '>*</sup> </p>
        <input required type="text" placeholder='Enter email address'
        className='bg-[#161D29] rounded-[0.3rem] mb-2 w-full px-[8px] py-[4px] text-[#AFB2BF]'
        />
        </label>

        <label htmlFor="" className='relative'>
        <p className="text-[0.8rem] text-[#AFB2BF] leading-[1.375rem]">Password<sup className='text-[#EF476F] '>*</sup> </p>

            <input className='bg-[#161D29] rounded-[0.3rem]  w-full px-[8px] py-[4px] text-[#AFB2BF]'
             required type={passVisisble ? "text" : "password"}
             placeholder='Enter password'/>  
             <span className='absolute bottom-1 right-3' onClick={()=> setPassVisible(prev => !prev)}>
                {passVisisble ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
             </span>
        </label>
        <button className='bg-[#FFD60A] py-[4px] px-[12px] w-full rounded-[8px] mt-6 font-medium text-[#000814]' >Sign Up</button>
      </form>
    </div>
  )
}

export default LoginForm
