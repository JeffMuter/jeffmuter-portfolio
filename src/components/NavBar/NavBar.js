//import classes from "./NavBar.module.css";
import React from "react";

const NavBar = (props) => {
  const onClickHandler = (event) => {};
  return (
    <div className="overflow-hidden float-right bg-transparent list-none m-0 top-0 w-full z-100 text-3xl font-custom">
      <ul>
        <li className="text-teal float-right mr-4 font-medium">
          <h3 class="font-custom">Projects</h3>
        </li>
        <li className="text-teal float-right mr-4 font-medium">
          <h3>Contact Me</h3>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
