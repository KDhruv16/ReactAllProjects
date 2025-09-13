import React, { useState } from 'react'

import image from "../assets/frame.png"
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
import { FcGoogle } from 'react-icons/fc';

function Template(props) {
    let title = props.title;
    let desc1 = props.desc1;
    let desc2 = props.desc2;
    let img = props.image;
    let formType = props.formType;
    let loggedin = props.loggedin;
    let setLoggedin = props.setLoggedin;
    // let [formType, setFormType] = useState()
    return (
        <div className='flex w-full  mt-9'>
            <div className='w-[50%]'>
                <h1 className='text-[2.5vw] font-semibold mb-2'>{title}</h1>
                <p className='text-[1.7vw] text-[#AFB2BF] leading-[1.2rem] '>{desc1}</p>
                <p className='text-[1.7vw] text-[#47A5C5] leading-[1.2rem] italic'>{desc2}</p>

                {formType === "login" ? <LoginForm loggedin={loggedin} setLoggedin={setLoggedin} /> : <SignUpForm loggedin={loggedin} setLoggedin={setLoggedin} />}

                <div className='flex mt-3 items-center gap-2' >
                    <div className='w-1/2 h-[.1vw] bg-[#2C333F]'></div>
                    <p className='text-[#2C333F] font-medium leading-[1.375rem]'>OR</p>
                    <div className='w-1/2 h-[.1vw] bg-[#2C333F]'></div>
                </div>
                <button className="w-full flex items-center justify-center rounded-[8px] font-medium text-[#AFB2BF] border-[#2C333F] border px-[8px] py-[4px] gap-x-2 mt-2 mb-5">
                    <FcGoogle />
                    <p>Sign Up with Google</p>
                </button>
            </div>
            <div className='relative w-[268px] h-[258px] mt-1 ml-10'>
                <img className='w-full h-full object-cover' src={image} alt="" />
                <img className='absolute -top-4 right-3 w-full h-full object-cover' src={img} alt="" />
            </div>


        </div>
    )
}

export default Template
