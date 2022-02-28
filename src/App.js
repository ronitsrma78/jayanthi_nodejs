/**
 *    Application : Counter App
 *     Requirement to build counter app.
 *   one state variable count using useState hooks to store the value of count.
 *   Two function for increment and decrement to count value.
 *   In JSX needs one element to display count value.
 *   In JSX needs two buttons for handling event for increment and decrement function
 */

// import useState hooks is used to create a state .
import { useState } from "react";

// import ChildC Component || this component is not related to our Counter App
import ChildC from "./ChildC";

// import ChildA Component
import ChildA from "./ChildA";

// create a functional Component
function App() {
  // create a state using useState hooks return two element in an Array.
  const [count, setCount] = useState(0);

  // count is the state variable has initial value 0 ;

  // setCount is the function is used to update count state variable.

  // Note : React re render the entire component while executes setCount();

  // increment function is defined as arrow function
  const increment = () => {
    // setCount function takes one argument to update the count state variable.
    setCount(count + 1);
    // so as argument for setCount we passes count + 1 means incrmenting in count with 1.
    console.log(" incrment button click");
  };

  //decrement
  const decrement = () => {
    // setCount function takes one argument to update the count state variable.
    setCount(count - 1);
    // so as argument for setCount we passes count + 1 means incrmenting in count with 1.
    console.log(" decrement button click");
  };

  // below console.log executes on each rendering.
  console.log("App Comp");

  // return JSX element.
  return (
    // use div to wrap multiple elements.
    <div>
      {/** this is how we can apply comment over here inside JSX */}

      <ChildA number={count} />

      {/** ChildA used to pass the value of count state variable throug props. */}

      {/** create two buttons  */}

      <button onClick={increment}>inc</button>
      {/** bind an event onClick with function should have a syntax like that above. */}

      <button onClick={decrement}>dec</button>

      {/** when user click on function trigeer thier respective function which is bound with the event. */}

      {/** below code is irrelative to your counter application. */}
      <hr />
      {/** this componet has an explation of class component. */}
      <ChildC />
    </div>
  );
}

export default App; // exporting App component as default
