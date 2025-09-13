import React, { useContext } from 'react'
import { AppContext } from './AppContetx'
import Spinner from './Spinner';
import Card from './Card';

function Post() {
  let {loading,post} = useContext(AppContext);

  
  return (
    <div className='mt-2 w-1/2 mx-auto '>
      {loading ? (<Spinner/>) :
       post.length === 0 ? (
                <div className="">
                    <p className="font-bold">No Post Found</p>
                </div>
            ) : (<Card post={post}/>)}
    </div>
  )
}

export default Post
