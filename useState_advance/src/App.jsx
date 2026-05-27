import React from 'react'
import { useState } from 'react'

const App = () => {

   const [nums, setNums] = useState(0)

   const btnclicked = ()=>{
    
    setNums(prev=>(prev+1))
    setNums(prev=>(prev+1))
    setNums(prev=>(prev+1))
    
   }

  return (
    <div>
      <h1>{nums}</h1>
      <button onClick={btnclicked} >Click Kro</button>
    </div>
  )
}

export default App
