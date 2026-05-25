import React from 'react'
 

const Card = (props) => {

  console.log(props.name);
  
  return (
    <div className="card">
        <div className="top">
          <div className="left">
            <img src={props.image} alt="" />
          </div>
          <div className="right">
            <h1>{props.name}</h1>
            <h2>Age : {props.age}</h2>
          </div>
          <div className="mid">
             
            <p><span>Bio:</span>
              {props.bio}
            </p>
          </div>

          <div className="bottom">
            <h2>{props.work}</h2>
            <button>View Profile</button>
          </div>
        </div>
      </div>
  )
}

export default Card
