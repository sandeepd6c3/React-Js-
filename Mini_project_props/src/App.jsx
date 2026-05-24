import React from "react";

const App = () => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <div className="left">
            <img src="sandeep.jpg.JPG" alt="" />
          </div>
          <div className="right">
            <h1>Sandeep Choudhary</h1>
            <h2>Age: 20</h2>
          </div>
          <div className="mid">
             
            <p><span>Bio:</span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
              voluptate.
            </p>
          </div>

          <div className="bottom">
            <h2>Software Engineer</h2>
            <button>View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
