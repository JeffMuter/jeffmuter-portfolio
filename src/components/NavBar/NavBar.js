//import classes from "./NavBar.module.css";
import React from "react";
import { Link } from "react-scroll";

const NavBar = (props) => {
  //goal is to create a navigation bar where a user can click on a couple buttons that scroll the user to the correlating section of the webpage. Contact, Projects. Unfixed to the top due to how small the page is.

  return (
    <div className="overflow-hidden absolute top-0 right-0 bg-transparent list-none m-0 w-full z-100 text-3xl font-custom">
      <ul>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-teal float-right mr-4 font-medium cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-teal float-right mr-4 font-medium cursor-pointer"
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default NavBar;
