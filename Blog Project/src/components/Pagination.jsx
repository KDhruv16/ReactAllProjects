import React, { useContext } from 'react'
import { AppContext } from './AppContetx'

function Pagination() {
    let { page, totalPage, fetchApi } = useContext(AppContext);
    function previousClickHandler(page) {
        console.log("hello");
        console.log(page);
        fetchApi(page - 1);
    }
    function nextClickHandler(page) {
        console.log("hello");
        console.log(page);
        fetchApi(page + 1);
    }
    return (
        <div className='mt-5 bottom-0  bg-white py-2 border-t-2 border-t-gray-300 sticky'>
            <div className='flex w-1/2 justify-between mx-auto items-center'>
                <div className='flex gap-3' >
                    {page == 1 ? ("") : (<button onClick={() => previousClickHandler(page)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Previous</button>)}
                    {page == totalPage ? ("") : (<button onClick={() => nextClickHandler(page)} className='border-2 border-gray-300 py-1 px-4 rounded-md'>Next</button>)}

                </div>
                <div>
                    <h1 className='text-[1.7vw] font-bold'>Page {page} of {totalPage}</h1>
                </div>
            </div>
        </div>
    )
}

export default Pagination
