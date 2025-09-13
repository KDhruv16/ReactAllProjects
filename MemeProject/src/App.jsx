import './App.css'
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  
  return (
    <div className='w-full  background p-1 px-4 flex flex-col items-center '> 
      <div className='w-full bg-white text-center uppercase font-bold pt-1 mt-5 rounded-lg py-1'>
        <h1>random gifs</h1>
      </div>
        <Random/>
        <Tag/>
    </div>
  )
}

export default App
