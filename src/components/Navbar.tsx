/*import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#111",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        Movies
      </NavLink>

      <NavLink
        to="/tv"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        TV
      </NavLink>
    </nav>
  );
};

export default Navbar;*/

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "15px",
        background: "#111",
      }}
    >
 
      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        Movies
      </NavLink>

      <NavLink
        to="/tv"
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
          textDecoration: "none",
        })}
      >
        TV
      </NavLink>
    </nav>
  );
};

export default Navbar;