import React, { useEffect, useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";
import Card from "../components/Card";

function Home() {
  let [product, setProduct] = useState([]);
  let url = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false);
  async function callApi() {
    let data = await axios.get(url);
    try{
        setLoading(true);
        setProduct(data.data);
        console.log(data);
        setLoading(false);
    }
      catch(e){
        console.log("error aagya jii");
        setProduct([]);
      }
  }
  useEffect(()=>{
    callApi();
  },[])
  return (
   <div className="flex flex-row flex-wrap gap-5  justify-center">
      {loading ? (<Spinner/>) : (
        product.length > 0 ? (
          product.map((post,id)=> <Card post={post} key={id} />)
        ) 
        : ( <p className="flex justify-center items-center">Loading..</p> )
      )}
   </div>
  );
}

export default Home;
