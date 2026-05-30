import React from 'react'

const App = () => {

  function submitHandler(e){
    e.preventDefault();
    console.log("Submited");
    
  }

  return (
    <div className='h-screen bg-gray-600 text-black'>

      <form action="" onSubmit={(e)=>{
        submitHandler(e)
      }} 
      className=' flex justify-between items-start p-10 '>
        <div className='flex flex-col gap-4 w-1/2 justify-center items-start  '>

          <input type="text"
            placeholder='Task Title '
            className='border-2 px-3 w-full rounded border-amber-50 font-medium outline-none ' />

          <textarea name="" placeholder='Description'
            className='border-2 px-3 h-30 w-full rounded border-amber-50 font-medium outline-none'></textarea>

          <button className=' px-3 bg-white rounded w-full'>Add Task</button>
        </div>
      </form>

    </div>
  )
}

export default App
