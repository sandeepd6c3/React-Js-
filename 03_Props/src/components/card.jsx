import React from 'react'

const card = (props) => {
    console.log(props.src);
    
  return (    

    <div className='card'>
    <img src={props.src} alt="" />
    <h1>{props.h1}</h1>
    <p>{props.p}</p>

    </div>
    
  )
}

export default card
