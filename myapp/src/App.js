import "./App.css";
import GrandParent from "./GrandParent";
// import Component1 from "./Component1";
// import Component2, { Component5, Component6 } from "./Component2";
// import { Component3 } from "./Component3";

function App() {
  // let a = "We are Learning MERN from Codehub Nexus";
  let myWill = "You are the owner of my 38cr Amount";
  return (
    <div className="App">
      <h1>Learning JS</h1>
      <GrandParent myWill={myWill}></GrandParent>

      {/* <Component1 asas={a} we={45}></Component1>
      <Component2 as={a} aa={23}></Component2>
      <Component3></Component3>
      <Component5></Component5>
      <Component6></Component6> */}
    </div>
  );
}

export default App;
