import React, { useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  let [products, setProducts] = useState([]);
  function callApi() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="w-full h-screen flex">
      <Nav callApi={callApi}></Nav>
      <div className="h-full w-[75%] p-7 flex flex-wrap gap-3">
        {/* {products.map((item,id)=>{
         return <div  key={id} className="w-[30%] h-[21vw]  border shadow flex flex-col items-center hover:scale-105">
            <div className="w-[60%] h-[85%] ">
              <img
                className="w-full h-full object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <h1 className="text-[1.5vw]">Lorem ipsum dolor sit amet.</h1>
          </div>
        })} */}

        <Link
          to="/details/1"
          className="w-[30%] h-[21vw]  border shadow flex flex-col items-center hover:scale-105"
        >
          <div className="w-[60%] h-[85%] ">
            <img
              className="w-full h-full object-contain"
              src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png"
              alt=""
            />
          </div>
          <h1 className="text-[1.5vw]">Lorem ipsum dolor sit amet.</h1>
        </Link>
      </div>
    </div>
  );
}

export default Home;
