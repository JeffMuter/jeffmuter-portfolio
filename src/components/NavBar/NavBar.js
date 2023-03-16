import classes from "./NavBar.module.css";
import React from "react";

const NavBar = (props) => {
  const onClickHandler = (event) => {};
  return (
    <div className={classes.topNav}>
      <ul>
        <li className={classes.items}>
          <h3>Projects</h3>
        </li>
        <li className={classes.items}>
          <h3>Contact</h3>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
