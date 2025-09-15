import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { remove,add } from "../redux/slice/CartSlice";
import { NavLink } from "react-router-dom";


function Card({ post }) {
  const [addd, setAdd] = useState(false);
   const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();
  function addClickHandler(id) {
    setAdd(true);
    dispatch(add(post))
   
    toast.success("Item added to cart", {
      style: {
        fontSize: "14px",
        padding: "5px",
        borderRadius: "8px",
      },
    });
  }

  function removeClickHandler(id) {
    setAdd(false);
     dispatch(remove(post.id));
    toast.error("Item removed from cart", {
      style: {
        fontSize: "14px",
        padding: "5px",
        borderRadius: "8px",
      },
    });
  }

  return (
      <div
      className="flex flex-col items-center justify-between group
      hover:scale-110 transition duration-300 ease-in gap-1 p-1 mt-5 rounded-xl outline"
    >
    
      <NavLink to={`/product/${post.id}`}>
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {post.title}
        </p>
      </div>
      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[120px] w-[100px] mt-3 mx-auto">
        <img className="h-full w-full " src={post.image} alt="" />
      </div>
   
    </NavLink>
      <div className="flex justify-between p-1 gap-2 items-center w-full mt-5 ">
        <p className="text-green-600 font-semibold">${post.price}</p>
         {
          cart.some((p) => p.id == post.id) ?
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={()=>removeClickHandler(post.id)}>
            Remove Item
          </button>) :
          (<button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
          onClick={()=>addClickHandler()}>
            Add to Cart
          </button>)
        }
      </div>
    </div>
  );
}

export default Card;
