import React from "react";

// you can use this syntax also for exporting default your functional component .
export default function ChildA(props) {
  // here it takes one parameter as store props object.

  // execute this console.log on each rendering.
  console.log("Child A");

  return (
    <div>
      <h3>Child A </h3>
      {/** below expression display the value of number which comes through props from thier parent component. */}
      {props.number}
    </div>
  );
}
