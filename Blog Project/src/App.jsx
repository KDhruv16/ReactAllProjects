import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header';
import Post from './components/Post';
import { AppContext } from './components/AppContetx';
import Pagination from './components/Pagination';

function App() {
  const {fetchApi} = useContext(AppContext);
  useEffect(()=>{
          fetchApi();
      },[])
 return(
  <div className='w-full h-screen'>
   <Header/>
   <Post/>
   <Pagination/>
  </div>
 );
}

export default App
