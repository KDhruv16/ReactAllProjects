import { toast } from 'react-toastify';
import './App.css'
import Cards from './component/Cards';
import Filter from './component/Filter';
import Navbar from './component/Navbar';
import { apiUrl, filterData } from "./Data";
import { useEffect, useState } from 'react';
import Spinner from './component/Spinner';


function App() {
const [courses,setCourses] = useState(null);
const [loading,setLoading] = useState(true);
const [category,setCategory] = useState([filterData[0].title]);
async function fetchApi(){
          setLoading(true);
            try{
                let output = await fetch(apiUrl);
                let res = await output.json();
                setCourses(res.data)
                console.log(courses);
              }
            catch(err){
              toast.error("Something went wrong");
            }           
            setLoading(false);
      };
  useEffect(()=>{
      fetchApi();
    },[]);
  return (
   <div className="min-h-screen flex-col flex bg-[#4a4e69]">
    <Navbar/>
    <Filter filterData={filterData} category={category} setCategory={setCategory} />
    {(loading ? <Spinner/> : <Cards courses={courses} category={category} />)}
    
   </div>
  )
}

export default App
