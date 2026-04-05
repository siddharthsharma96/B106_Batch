import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav">
      <h2 className="logo">My Todo</h2>
      <div className="links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/todos"}>Todos</NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
