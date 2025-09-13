
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
function useGif() {
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
    const [gif,setGif] = useState('');
    const text = useRef(null);
    const [loading,setLoading] = useState(false);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
     async function fetchApi(tag){
        setLoading(true);
        let res =  await axios.get(tag ? `${url}&tag=${tag}`  : url);
        setGif(res.data.data.images.downsized_large.url);
        setLoading(false);
     }
    //  function clickHandler(){
    //     fetchApi(text.current.value);
    //     console.log(text.current.value);
    //  }
     useEffect(()=>{
        fetchApi();
     },[])
  return {gif, loading, fetchApi};
}

export default useGif
