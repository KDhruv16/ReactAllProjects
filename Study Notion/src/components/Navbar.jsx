import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router'
import Logo from "../assets/Logo.svg";
import toast, { Toaster } from 'react-hot-toast';
function Navbar(props) {
  let loggedin = props.loggedin;
  let setLoggedin = props.setLoggedin;
  let navigate = useNavigate();
  function clickHandler() {
    toast.success("Logged Out");
    setLoggedin(false);
    console.log("hello");
    navigate("/");
  }
  return (
    <div className='flex text-white gap-4  justify-between items-center'>
      <Link to="/">
        <img className='w-32 ' src={Logo} alt="" />
      </Link>
      <div className='flex gap-3 text-s'>
        <Link to="/" >Home</Link>
        <Link to="/about" >About</Link>
        <Link to="/about" >Contact</Link>
      </div>
      {/* <button onClick={()=>setLoggedin(prev => !prev)}>hello</button> */}
      <div className='flex gap-4 items-center text-[#AFB2BF]'>
        {!loggedin &&
          <Link className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]"
          to="/login" >Login</Link>
        }
        {!loggedin &&
          <Link className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]" 
           to="/signup">Sign up</Link>
        }
        {loggedin && (
          <Link to="/">
            <button
              onClick={clickHandler}
              className="bg-[#161D29] py-[8px] px-[12px] rounded-[8px] border border-[#2C333F]"
            >
              Log Out
            </button>
          </Link>
        )}
        {loggedin &&
          <Link to="/dashboard">dashboard</Link>
        }
      </div>
    </div>
  )
}

export default Navbar
