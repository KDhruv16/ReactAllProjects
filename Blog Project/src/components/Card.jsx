import React from 'react'

function Card({ post }) {
    console.log(post);

return (
    <div className='flex flex-col gap-6 mt-3 h-fit'>
        {post.map((post) => {
            return <div key={post.id} className="">
                <p className="font-bold text-sm ">{post.title}</p>
                <p className="text-[12px]">
                    By <span className="italic">{post.author}</span> or{" "}
                    <span className="underline font-bold">{post.category}</span>
                </p>
                <p className="text-[12px]">posted on {post.date}</p>
                <p className="text-[12px] mb-1 mt-[13px]">{post.content}</p>
                <div className="flex flex-wrap gap-x-2 items-center">
                    {post.tags.map((tag, index) => {
                        return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>;
                    })}
                </div>
            </div>;
        })}
    </div>

    )
}

export default Card
