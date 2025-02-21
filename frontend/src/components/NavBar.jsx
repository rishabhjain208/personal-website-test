import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav>
        <ul className="flex justify-between">
          <li>
            {" "}
            <a href="/aboutme"></a> About me
          </li>
          <li>Skills</li>
          <l1>Hobbies & Interests</l1>
          <li>Passions</li>
          <li>Academic Background</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
