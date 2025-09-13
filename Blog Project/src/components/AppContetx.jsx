import React, { createContext, useEffect, useState } from 'react'
import { baseUrl } from '../baseUrl';
import axios from 'axios';

export let AppContext = createContext();

function AppContextProvider({children}) {
    let [page,setPage] = useState(1);
    let [post,setPost] = useState([]);
    let [loading,setLoading] = useState(false);
    let [totalPage,setTotalPage] = useState(null);
    
   
    
    async function fetchApi(page=1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`
        try{
            let data = await axios.get(`${url}`);
            
            setPage(data.data.page);
            setPost(data.data.posts);
            console.log(data?.data?.totalPages);
            
            setTotalPage(data?.data?.totalPages);
        }
        catch(e){
            console.log("Error")
            setPage(1);
            setPost([]);
            setTotalPage(null);
        }
        setLoading(false);
    }
     const value = {
        post,
        setPost,
        page,
        setPage,
        totalPage,
        setTotalPage,
        loading,
        setLoading,
        fetchApi,
    }
  return (
      <AppContext.Provider value={value}>
        {children}
      </AppContext.Provider>
  )
}

export default AppContextProvider;
