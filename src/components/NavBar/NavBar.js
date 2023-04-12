import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

// A simple navigation bar component.
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  // Detect if screen size is mobile.

  // Detect when Burger Icon is clicked.
  const handleMenuClick = () => {
    setMenuOpen(!isOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Render the navigation bar with a hamburger menu for mobile screen sizes
  if (isMobile) {
    return (
      <div className="w-full">
        <Menu
          isOpen={menuOpen}
          onOpen={handleMenuClick}
          onClose={handleMenuClick}
          right
          width={"50%"}
        >
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="text-teal font-medium cursor-pointer mb-4"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-teal font-medium cursor-pointer mb-4"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </Menu>
      </div>
    );
  }

  // Render a list with two links, one for the Projects section and one for the Contact section that are scrolled to when clicked.
  return (
    <div className="overflow-hidden absolute top-0 right-0 bg-transparent list-none m-0 w-full z-100 text-3xl">
      <nav>
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
  );
};

export default NavBar;
