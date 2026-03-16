import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Header";

function App() {
  let a = 10;
  return (
    <div className="App">
      <Header></Header>
      <h1>Hello, React!</h1>
      <Outlet context={{ a }}></Outlet>
    </div>
  );
}

export default App;
