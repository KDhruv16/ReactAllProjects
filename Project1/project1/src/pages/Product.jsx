import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { useLinkClickHandler, useLocation, useParams } from 'react-router-dom'
import { add, remove } from '../redux/slice/CartSlice';

function Product() {
  let { prod } = useParams();
  let {cart} = useSelector((state)=> state);
  let dispatch = useDispatch()
  let [data, setData] = useState({});
  const [present,setPresent] = useState(false);
  let location = useLocation();
  let post;
  async function fetch() {
    let url = `https://fakestoreapi.com/products/${prod}`;
    try {
      let res = await axios.get(url);
      post = res;
      setData(res.data);
      console.log(res);

    }
    catch (e) {
      console.log("error");

    }
  }
  function addClickHandler(){
    setPresent(true);
    toast.success("added");
    dispatch(add(data));
  }
    function removeClickHandler(){
    setPresent(false);
    toast.error("removed");
    console.log(data);
    
    dispatch(remove(data.id));
  }
  useEffect(() => {
    fetch()
  }, [location.pathname])
  return (
    <div className='flex flex-row-reverse px-3 py-1 rounded-xl outline justify-center gap-5 mt-10 items-center mx-auto w-[60%]'>
  <div className='w-[70%] flex flex-col items-center justify-center group gap-4'>
    
    {/* Title */}
    <h1 className='font-bold text-2xl text-gray-800 text-center tracking-wide'>
      {data.title}
    </h1>
    
    {/* Description */}
    <h1 className='capitalize px-3 text-gray-600 text-base leading-relaxed text-center'>
      {data?.description
        ? data.description.split(" ").slice(0, 7).join(" ") + "..."
        : "Loading description..."}
    </h1>
    
    {/* Price */}
    <div className='flex items-center gap-2'>
      <p className='font-semibold text-[2vw] text-gray-700'>Price :- </p>
      <p className='text-[2vw] text-green-600 font-bold'>${data.price}</p>
    </div>
    
    {/* Button */}
    {!cart.some((item) => item.id == data.id) ? (
      <button
        onClick={addClickHandler}
        className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 py-1 px-3 text-xl"
      >
        Add To Cart
      </button>
    ) : (
      <button
        onClick={removeClickHandler}
        className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 py-1 px-3 text-xl"
      >
        Remove From Cart
      </button>
    )}
  </div>

  {/* Image */}
  <div className='w-[30vw] h-[30vw] flex justify-center items-center'>
    <img className='w-full h-full object-contain rounded-lg shadow-md' src={data.image} alt="" />
  </div>
</div>

  )
}

export default Product
