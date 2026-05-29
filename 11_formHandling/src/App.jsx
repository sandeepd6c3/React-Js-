import React from 'react'

const App = () => {

  function formSubmitting(e) {
    e.preventDefault();
    console.log("Form Submitd !");

  }

  return (
    <div>
      <form onSubmit={(e) => {
        formSubmitting(e);
      }} action="">
        <input type="text" placeholder='Enter text : ' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
