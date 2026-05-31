import React from 'react'

const App = () => {

  function submitHandler(e) {
    e.preventDefault();
    console.log("Submited");

  }

  return (
    <div className='h-screen lg:flex bg-gray-600 text-black'>

      <form action="" onSubmit={(e) => {
        submitHandler(e)
      }}
        className=' flex  lg:w-1/2 flex-col items-start p-10 gap-4 '>
 <h1 className='text-4xl font-bold text-white'>Add Notes</h1>

        <input type="text"
          placeholder='Task Title '
          className='border-2 px-3 py-4 w-full rounded border-amber-50 font-medium text-4xl outline-none ' />

        <textarea name="" placeholder='Description'
          className='border-2 px-3 h-30 w-full rounded border-amber-50  font-medium outline-none text-2xl'></textarea>

        <button className=' px-3 bg-white rounded w-full'>Add Task</button>

      </form>

      <div className='  gap-5 flex-wrap lg:border-l-3  lg:w-1/2 p-10'>
        <h1 className='text-4xl font-bold text-white'>Your Notes</h1>
        
        <div className='flex  gap-5 flex-wrap mt-5 mb-2 overflow-auto h-full'>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
          <div className='h-60 w-50  bg-white rounded flex-wrap'></div>
           
          
        </div>
        

      </div>

    </div>
  )
}

export default App
