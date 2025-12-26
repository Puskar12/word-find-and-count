import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorScreen from './components/ColorScreen'
import axios from 'axios'
import { Client } from "@gradio/client";
import { googleAiResponse, openRouterResponse } from './Chatbots'
import ByChatgpt from './screens/ByChatgpt'
import ByGoogle from './screens/ByGoogle'

function App() {
  const fetchMsg = async() => {
    const res = await googleAiResponse("How are You")
    console.log(res);
    
  }





  const [color, setColor] = useState('')
  const [bgcolor, setBgColor] = useState('')
  const handleSubmit = (e)=>{
    console.log("inside the handleSubmit");
    setBgColor(e)
  }
  // console.log(color)

  return (
    <ByGoogle />
    // <div className='h-100 w-100 bg-gray-100  flex  flex-wrap justify-center '>
    //   <button onClick={()=>fetchMsg()}>Call Hugging face Api</button>
    //  <div>
    //    <input type="text"
    //   className='bg-gray-200 rounded-l-2xl h-10 w-auto'
    //   value={color}
    //   onChange={(e)=>setColor(e.target.value)} />
    //   <button className='bg-blue-600 rounded-r-2xl h-10 w-20 cursor-pointer'
    //   onClick={()=>handleSubmit(color)}>Submit</button>
      
    //  </div>
    //  <div>
    //   <ColorScreen color={bgcolor}/>
    //  </div>
    // </div>
  )
}

export default App
