import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./Common/NavBar";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-in-out" });
  }, []);
  const [todos, setTodos] = useState([]);
  console.log(todos);

  const addTodo = (el) => {
    setTodos([...todos, el]);
  };
  return (
    <div className="App">
      <NavBar></NavBar>
      <Outlet context={{ todos, addTodo }}></Outlet>
    </div>
  );
}

export default App;
