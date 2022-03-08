import React from "react";

function ShowCount(props) {
  console.log("swComp render");

  return <div>count : {props.count} </div>;
}

export default ShowCount;
