import React from "react";

const App = () => {
  // const btnClicked = () => {
  //   console.log("Form Submit Successfully");
  // };

  // function oninputchange(){
  //   console.log('tyyping');

  // }

const onscroll=(elem)=>{
  console.log('scrolling .. wheel at , ',elem);  
  
}

  return (
    <div  onWheel={(elem)=>{
      
     onscroll(elem.deltaY)
      
    }}>
      <div className='page1'>1st Page</div>
      <div className='page2'>2nd Page</div>
      <div className='page3'>3rd Page</div>
      <div className='page4'>4th Page</div>
      <div className='page5'>5th Page</div>
     
    </div>
  );
};

export default App;
