import React, { useState } from 'react'
import { FcLike } from "react-icons/fc";
import { toast } from 'react-toastify';
import { FcLikePlaceholder } from "react-icons/fc";

const Card = ({ item }) => {
    const [like, setLike] = useState([]);
    let clickHandler = () => {
        if (like.includes(item.id)) {
            setLike((prev) => prev.filter((cid) => cid !== item.id));
            toast.warning("Like Removed ! ");
        }
        else {
            if (like.length == 0) setLike([item.id]);
            else setLike((prev) => [...prev, item.id]);
            toast.success("Like Added !");
        }
        console.log(like);

        
    };
    return (
        <div className='bg-[#22223b] bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative '>
                <img className="" src={item.image.url} alt="" />
                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {like.includes(item.id) ?  <FcLike fontSize="1.75rem"></FcLike> : <FcLikePlaceholder fontSize="1.75rem"  />}
                    </button>
                </div>
            </div>
            <div className=' p-3 pt-5 '>
                <p className='text-white text-lg font-semibold leading-6'>{item.title}</p>
                <p className='mt-2 text-white'>{(item.description.length > 100  ? item.description.substr(100)+"..." : item.description  )}</p>
            </div>



        </div>
    )
}

export default Card
