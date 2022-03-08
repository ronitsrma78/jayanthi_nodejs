import React, { useState } from "react";
import ShowCount from "./ShowCount";

// export default function Counter() {
//   console.log("component rerender");
//   // create state

//   let [count, setCount] = useState(0); // count = 0

//   const incHandler = () => {
//     count = count + 1; // count = 1
//     setCount(count);
//   };

//   function decHandler() {
//     if (count > 0) {
//       count = count - 1;
//       setCount(count);
//     }
//   };

//   return (
//     <div>
//       <ShowCount count={count} />
//       <button onClick={incHandler} disabled={count > 4 ? true : false}>
//         Increment
//       </button>
//       <button onClick={decHandler}>Decrement</button>
//     </div>
//   );
// }

class Counter extends React.Component {
  state = {
    count: 0,
  };

  incHandler = () => {
    if (this.state.count < 5) {
      this.setState({
        count: this.state.count + 1,
      });
    }
  };

  decHandler() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  render() {
    return (
      <div>
        <ShowCount count={this.state.count} />
        <button onClick={this.incHandler}>Increment</button>
        {/** traditionl function  **/}
        <button
          onClick={this.decHandler.bind(this)}
          disabled={this.state.count == 0 ? true : false}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Counter;
