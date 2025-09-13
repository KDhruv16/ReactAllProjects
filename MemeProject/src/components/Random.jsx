import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';
import useGif from './useGif';
function Random(){
   //  const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
   //  const [gif,setGif] = useState('');
   //  const [laoding,setLoading] = useState(false);
   //  const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
   //   async function fetchApi(){
   //      setLoading(true);
   //      let res = await axios.get(url);
   //      setGif(res.data.data.images.downsized_large.url);
   //      setLoading(false);
   //   }
   //   function clickHandler(){
   //      fetchApi();  
   //   }
   //   useEffect(()=>{
   //      fetchApi();
   //   },[])
       const { gif, loading, fetchApi } = useGif();
  return (
    <div className='bg-green-400 w-[40vw]  mt-4 rounded-lg flex flex-col gap-3 items-center '>
      <h3 className='mt-2 uppercase underline font-semibold'>a random gif</h3>
      <div className='w-[25vw] h-[25vw]  rounded-lg overflow-hidden'>
      {loading ? (<Spinner/>) : (<img className='w-[25vw] h-[25vw]' src={gif} alt="" />)}  
      </div>
      <button onClick={()=>fetchApi("")} className='bg-white/85 uppercase text-[1.5vw] font-semibold w-[80%] mx-auto mb-3 rounded-sm'>generate</button>
    </div>
  )
}

export default Random
