import React from "react";
import { Link } from "react-scroll";

// A simple navigation bar component
const NavBar = (props) => {
  // Render a list with two links, one for the Projects section and one for the Contact section that are scrolled to when clicked.
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
