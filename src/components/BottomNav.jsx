import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-around items-center bg-blue-600 text-white py-4 shadow-md">
      <Link to="/" className="hover:text-gray-300 font-semibold text-lg">
        Home
      </Link>
      <Link to="/tasks" className="hover:text-gray-300 font-semibold text-lg">
        Tasks
      </Link>
      <Link to="/profile" className="hover:text-gray-300 font-semibold text-lg">
        Profile
      </Link>
    </nav>
  );
}
