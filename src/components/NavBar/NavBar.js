import React, { useState } from "react";
import { Link } from "react-scroll";
import "./NavBar.css";

// A simple navigation bar component.
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Render a list with two links, one for the Projects section and one for the Contact section that are scrolled to when clicked.
  return (
    //navbar container
    <div>
      {/* wide screen nav container */}
      <div className="wide-nav">
        <nav className="float-right">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-teal float-right mr-8 font-medium cursor-pointer"
          >
            Contact
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-teal float-right mr-8 font-medium cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="text-teal float-right mr-8 font-medium cursor-pointer"
          >
            Skills
          </Link>
        </nav>
      </div>
      {/* burger nav container */}
      <div id="burger" className={isOpen ? "open" : ""} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* sidebar nav container */}
      <div id="sidebar" className={isOpen ? "side-open" : ""}>
        <aside className="sidebar" onClick={handleClick}>
          <nav>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-teal text-2xl font-medium cursor-pointer"
            >
              Contact
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-teal text-2xl font-medium cursor-pointer"
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-teal text-2xl font-medium cursor-pointer"
            >
              Skills
            </Link>
          </nav>
          {/*        <ul className="side-list">
            <li className="side-menu"></li>
            <li className="side-menu">Contact</li>
            <li className="side-menu">About</li>
            <li className="side-menu">Merch</li>
          </ul>
*/}
        </aside>
      </div>
    </div>
  );
};

export default NavBar;
