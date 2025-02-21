import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link to="/aboutme" className="hover:underline">
            About Me
          </Link>
        </li>
        <li>
          <Link to="/skills" className="hover:underline">
            Skills
          </Link>
        </li>
        <li>
          <Link to="/hobbies" className="hover:underline">
            Hobbies & Interests
          </Link>
        </li>
        <li>
          <Link to="/passions" className="hover:underline">
            Passions
          </Link>
        </li>
        <li>
          <Link to="/academic" className="hover:underline">
            Academic Background
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
