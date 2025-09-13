import React from 'react'
import axios from 'axios';
function Nav({callApi}) {
    
  return (
  
      <nav className="w-[25%] h-full bg-zinc-100 flex flex-col items-center pt-5">
          <a className=" px-2  border border-blue-300" href="/create">
            Add New Product
          </a>
          <h1 className="w-[80%] mt-3">Category Filter</h1>
          <ul className="w-[80%] mt-2">
            <li className="flex items-center gap-1.5">
              <span className="w-3 h-3 block bg-red-300 rounded-full"></span>
              Cat 1
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-3 h-3 block bg-blue-300 rounded-full"></span>
              Cat 1
            </li>
            <li className="flex items-center gap-1.5">
              <span className="w-3 h-3 block bg-green-300 rounded-full"></span>
              Cat 1
            </li>
          </ul>
          {/* <button onClick={callApi} className='rounded-md p-2 bg-red-300'>hello</button> */}
        </nav>
  )
}

export default Nav
