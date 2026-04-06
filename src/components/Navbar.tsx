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

export default Navbar; */

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "12px",
        padding: "15px",
        background: "#1c1c25",
        justifyContent: "flex-end"
      }}
    >
      {/* MOVIES */}
      <NavLink
        to="/movies"
        style={({ isActive }) => ({
          padding: "8px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          color: "white",
          background: isActive ? "#3b82f6" : "#3c3c40",
          transition: "0.2s",
          fontWeight: 500,
        })}
      >
        Movies
      </NavLink>

      {/* TV */}
      <NavLink
        to="/tv"
        style={({ isActive }) => ({
          padding: "8px 16px",
          borderRadius: "8px",
          textDecoration: "none",
          color: "white",
          background: isActive ? "#3b82f6" : "#3c3c40",
          transition: "0.2s",
          fontWeight: 500,
        })}
      >
        TV
      </NavLink>
    </nav>
  );
};

export default Navbar;