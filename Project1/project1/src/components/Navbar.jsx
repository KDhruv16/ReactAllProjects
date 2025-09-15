import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import logo from "../assets/logo.png";

function Navbar() {
  const {cart} = useSelector((state)=>state)
  return (
    <div className='bg-[#0F172A]'>
      <nav className="flex justify-between items-center py-2 max-w-2xl mx-auto ">

        <NavLink to="/">
          <div className="ml-5">
          <img src={logo} className="h[11vw] w-[12vw] "/>
          </div>
        </NavLink>

          <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6 ">
            <NavLink to="/">
              <p className='hover:text-green-600'>Home</p>
            </NavLink>

            <NavLink to="/cart">
              <div className="relative ">
                  <FaShoppingCart className="text-xl hover:text-green-600"/>
                  {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
                  
              </div>
            </NavLink>
            
          </div>
      </nav>
    </div>
  )
}

export default Navbar
