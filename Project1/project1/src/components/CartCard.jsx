import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../redux/slice/CartSlice';
import { AiFillDelete } from 'react-icons/ai';
import { NavLink } from 'react-router-dom';

function CartCard({post}) {
    let dispatch = useDispatch();
    let {cart} = useSelector((state)=> state);
    function removeFromCart(){
        dispatch(remove(post.id))
    }
  return (
    <NavLink to={`/product/${post.id}`}>
<div className={`"flex items-center p-2 md:p-5 justify-between ${cart.length > 1 ? ("border-b ") : ("")} mt-2 mb-2 md:mx-5 "`}>
      <div className="flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center">
        <div className="w-[30%]">
          <img className="object-cover " src={post.image} />
        </div>
        <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
          <h1 className="text-xl text-slate-700 font-semibold">{post.title}</h1>
          <h1 className="text-base text-slate-700 font-medium">{post.description.split(" ").slice(0,10).join(" ")+"..."}</h1>
          <div className="flex items-center justify-between">
            <p className="font-bold text-lg text-green-600">${post.price}</p>
            <div className="text-red-800  bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
            onClick={removeFromCart}>
              <AiFillDelete/>
            </div>
          </div>

        </div>


      </div>

    </div>
    </NavLink>
  )
}

export default CartCard
