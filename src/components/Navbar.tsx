import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        gap: "12px",
        padding: "15px",
        background: "#1c1c25",
        justifyContent: "flex-end",
        fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
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