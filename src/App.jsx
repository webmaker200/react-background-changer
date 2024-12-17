import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("#48c9b0")

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{backgroundColor: color}}
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-4 bg-white px-3 py-2 rounded-xl'> 
          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#48c9b0"}}
          onClick={() => setColor("#48c9b0")}
          >Olive</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#196f3d"}}
          onClick={()=> setColor("#196f3d")}
          >Green</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#45b39d"}}
          onClick={() => setColor("#45b39d")}
          >Sea Green</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#5dade2"}}
          onClick={() => setColor("#5dade2")}
          >Light Blue</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#7d3c98"}}
          onClick={() => setColor("#7d3c98")}
          >Purple</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#d4ac0d"}}
          onClick={() => setColor("#d4ac0d")}
          >Yellow</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#eb984e"}}
          onClick={() => setColor("#eb984e")}
          >Orange</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#34495e"}}
          onClick={() => setColor("#34495e")}
          >Dark Grey</button>

          <button className='outline-none px-5 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"#cb4335"}}
          onClick={() => setColor("#cb4335")}
          >Red</button>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
