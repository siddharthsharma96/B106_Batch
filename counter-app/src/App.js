import { useEffect, useState } from "react";
import "./App.css";
import CounterApp from "./CounterApp";

function App() {
  // 1.varibale
  // 2. Function to update the value of first Varibale
  const [val, setVal] = useState(0);
  const handleDecrement = () => {
    setVal(val - 1);
  };
  const handleIncrement = () => {
    setVal(val + 1);
  };

  // useEffect
  // 1. Callback Function
  // 2. Array of dependencies
  useEffect(() => {
    console.log("Effect is running ", val);
    if (val < 0) {
      let timer = setTimeout(() => {
        setVal(0);
      }, 2000);

      // cleanup function
      return () => {
        clearTimeout(timer);
      };
    }
  }, [val]);
  // case1: Empty array of dependecies
  // it will run only single time

  // Case 2: With some array of dependencies
  // it will run first time when the website loads and
  // whenever dependecies will change their value

  // Case 3 : without array of dependecies
  // Whenever any state is going to change the callback function will run

  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterApp
        val={val}
        handleDecrement={handleDecrement}
        handleIncrement={handleIncrement}
      ></CounterApp>
    </div>
  );
}

export default App;
