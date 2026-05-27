import React, { useState, useSyncExternalStore } from 'react'

const App = () => {

  const [val, setVal] = useState(0)

  function increase(){
    setVal(val+1);
  }
  function decrease(){
    setVal(val-1)
  }

 
  return (
    <div className='parent' >
    <h1>{val}</h1>

    <div className='btn' >
      <button onClick={decrease} >Decrease</button>
    <button onClick={increase} >Increase</button>
    </div>
    </div>
  )
}

export default App
