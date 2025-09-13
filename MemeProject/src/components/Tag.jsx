import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

function Tag() {
       const text = useRef(null);
    const { gif, loading, fetchApi } = useGif();
  return (
    <div className='bg-green-400 w-[40vw] mb-3  mt-4 rounded-lg flex flex-col gap-3 items-center '>
      <h3 className='mt-2 uppercase underline font-semibold'>a random gif</h3>
      <div className='  rounded-lg '>
         {loading ? (<Spinner/>) : (<img className='w-[25vw] h-[25vw]' src={gif} alt="" />)}  
      </div>
      <input className='outline rounded-md px-3' type="text" ref={text} placeholder='Enter text...' />
      <button onClick={()=> fetchApi(text.current.value)} className='bg-white/85 uppercase text-[1.5vw] font-semibold w-[80%] mx-auto mb-3 rounded-sm'>generate</button>
    </div>
  )
}

export default Tag
