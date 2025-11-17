import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const userName = localStorage.getItem("userName");

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "white",
        borderBottom: "1px solid #ddd",
        fontSize: "18px",
      }}
    >
      {/* Left Logo */}
      <div style={{ fontWeight: "bold", fontSize: "22px" }}>Todo App</div>

      {/* Right Navigation */}
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Link
          to="/"
          style={{
            color: location.pathname === "/" ? "blue" : "black",
            textDecoration: "none",
          }}
        >
          Home
        </Link>

        <Link
          to="/tasks"
          style={{
            color: location.pathname === "/tasks" ? "blue" : "black",
            textDecoration: "none",
          }}
        >
          Tasks
        </Link>

        <Link
          to="/profile"
          style={{
            color: location.pathname === "/profile" ? "blue" : "black",
            textDecoration: "none",
          }}
        >
          Profile
        </Link>

        {/* If user logged in show username */}
        {userName ? (
          <span style={{ fontWeight: "bold", color: "green" }}>
            {userName}
          </span>
        ) : (
          <>
            <Link to="/register" style={{ textDecoration: "none" }}>
              Register
            </Link>
            <Link to="/login" style={{ textDecoration: "none" }}>
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
