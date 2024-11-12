import React from "react";

// const Card = (props) => {
const Card = ({ name, email, id }) => {
  // const {name, email, id} = props;
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <h1> Robo Friends </h1>
      {/* <img src = {`https://robohash.org/${props.id}?200*200`} alt = " robots "/> */}
      {/* after deconstruct the The props */}
      <img src={`https://robohash.org/${id}?200*200`} alt=" robots " />
      <div>
        {/* <h2>{props.name}</h2>
               <p>{props.email}</p> */}
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
