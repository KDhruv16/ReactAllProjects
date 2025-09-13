import React, { useEffect } from 'react'
import Card from './Card';

function Cards({courses,category}) {
    console.log(courses);
    let arr = [];
    
    function getCourse(){
        if(category == "All"){
     Object.values(courses).forEach((item)=>{
        item.forEach((ele)=>{
            arr.push(ele);
        })
    })
        return arr;
}
    else{
        return courses[category];
    }
}
    // console.log(arr);
    
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourse().map((item,id)=>{
       return <Card item={item} key={id} />
      })}
    </div>
  )
}

export default Cards
