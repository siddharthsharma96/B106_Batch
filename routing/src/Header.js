import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <NavLink to={"/"}>
        <img
          src="https://codehubnexus.com/assets/logov2-BR5dDC9U.png"
          alt="a"
        ></img>
      </NavLink>
      <ul>
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About us</NavLink>
        </li>
        <li>
          <NavLink to={"/help"}>Help</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Cart</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
