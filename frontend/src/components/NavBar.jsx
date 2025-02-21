import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <ul className="flex justify-center space-x-8 text-white font-semibold">
        <li>
          <Link to="/aboutme" className="hover:text-gray-300 transition">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:text-gray-300 transition">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/hobbies" className="hover:text-gray-300 transition">
            Hobbies & Interests
          </Link>
        </li>
        <li>
          <Link to="/passions" className="hover:text-gray-300 transition">
            Passions
          </Link>
        </li>
        <li>
          <Link to="/academic" className="hover:text-gray-300 transition">
            Academic Background
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
