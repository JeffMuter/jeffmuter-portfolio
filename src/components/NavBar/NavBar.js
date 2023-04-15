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
      {/* burger nav container */}
      <div id="burger" className={isOpen ? "open" : ""} onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {/* tint overlay so that when the sidebar is open, the rest of the page has a tint */}
      <div
        id="overlay"
        className={isOpen ? "overlay" : "overlay-hidden"}
        onClick={handleClick}
      ></div>
      {/* sidebar nav container */}
      <div id="sidebar" className={isOpen ? "side-open" : ""}>
        <aside className="sidebar" onClick={handleClick}>
          <nav className="sidebar">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-teal text-3xl font-medium cursor-pointer mt-2 mb-2"
              onClick={handleClick}
            >
              Contact
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="text-teal text-3xl font-medium cursor-pointer mt-2 mb-2"
              onClick={handleClick}
            >
              Projects
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="text-teal text-3xl font-medium cursor-pointer mt-2 mb-2"
              onClick={handleClick}
            >
              Skills
            </Link>
          </nav>
        </aside>
      </div>
    </div>
  );
};

export default NavBar;
