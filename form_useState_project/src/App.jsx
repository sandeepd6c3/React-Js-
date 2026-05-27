import React, { useState } from "react";
import 'remixicon/fonts/remixicon.css'

const App = () => {

  const [user, setUser] = useState("")
  const [show, setShow] = useState(false)

  function afterSubmit(e){
    e.preventDefault();
     setShow(true);
  }

  return (
    <div>

{show &&  (

  <div className="popup">

    <h1>Welcome {user}</h1>

    <button onClick={() => setShow(false)}>
     <i className="ri-close-line"></i>
    </button>

  </div>

)}

      <h2 className="reg">Registration Form</h2>

      <form onSubmit={afterSubmit}>
        <label>Full Name:</label>
        <input onChange={(e)=>setUser(e.target.value)} type="text" placeholder="Enter your name" />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" />
        <br />
        <br />
        <label>Password:</label>
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <label>Gender:</label>
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female
        <br />
        <br />
        <label>Skills:</label>
        <input type="checkbox" /> HTML
        <input type="checkbox" /> CSS
        <input type="checkbox" /> JavaScript
        <br />
        <br />
        <label>City:</label>
        <select>
          <option>Jaipur</option>
          <option>Delhi</option>
          <option>Mumbai</option>
        </select>
        <br />
        <br />
        <label>Message:</label>
        <br />
        <textarea rows="4" cols="30"></textarea>
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
