import React from "react";

const Card = (props) => {
  return (
   
      <div className="card">
        {/*  TOP SECTION */}

        <div className="top">
          <h3 className="status">{props.elem.status}</h3>
          <h3 className="pay">{props.elem.pay}</h3>
        </div>

        {/* IMAGE SECTION */}

        <img
          src={props.elem.image}
          alt=""
        />
        {/* Middle Section */}
        <div className="middle">
          <h1>{props.elem.name}</h1>
          <h5 className="role">{props.elem.role}</h5>
          <h5 className="work">{props.elem.work}</h5>

          <div className="skills">
            <h3>{props.elem.skills[0]}</h3>
            <h3>{props.elem.skills[1]}</h3>
            <h3>{props.elem.skills[2]}</h3>
            <h3 className="more">{props.elem.skills[3]}</h3>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="description">
          <p>{props.elem.desc}</p>
        </div>

        <h1 className="hr">
          <hr />
        </h1>

        <button>VIEW PROFILE</button>
      </div>
     
  );
};

export default Card;
