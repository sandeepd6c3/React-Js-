import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  function FormSubmitting(e) {
    e.preventDefault();
    console.log("Form submited by", title);
    setTitle('');
  }

  return (
    <div>
      <form action="" onSubmit={(e) => {
        FormSubmitting(e);
      }}>
        <input type="text" placeholder='Enter Name....'
        value={title}
        onChange={(e) => {
           setTitle(e.target.value)

        }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
