import React from 'react'

function Filter({ filterData,category,setCategory }) {

    function filterHandler(title){
        setCategory(title);
        console.log(category);  
    }
    return (
        <div className="w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center ">
            {filterData.map((item, id) => {
                return  <button
            className={`text-lg px-2 py-1  rounded-md font-medium text-white bg-black border-2 cursor-pointer hover:bg-gray-500 transition-all duration-200
              ${category === item.title ?
                "opacity-100 border-white" :
                "opacity-80 border-transparent"
              }
            `}
            key={item.id}
           onClick={()=>filterHandler(item.title)}
          >
            {item.title}
          </button>
            })}
        </div>
    )
}

export default Filter
