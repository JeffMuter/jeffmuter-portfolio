import classes from "./NavBar.module.css";
import React from "react";

const NavBar = (props) => {
  const onClickHandler = (event) => {};
  return (
    <div className="bg-transparent float-right">
      <ul>
        <li className="text-lightRed">
          <h3>Projects</h3>
        </li>
        <li className="text-lightRed">
          <h3>Contact Me</h3>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
