import React from "react";

const App = () => {
  // const btnClicked = () => {
  //   console.log("Form Submit Successfully");
  // };

  return (
    <div>
      <button onClick={()=>{
        console.log('Form Submit Successfully');
        
      }}>Submit Kro</button>
    </div>
  );
};

export default App;
