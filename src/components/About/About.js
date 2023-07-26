//import Card from "../UI/Card";
//import classes from "./About.module.css";
import { useState, useEffect } from "react";
// import className from "classnames";

const About = (props) => {


  const [isLoaded, setIsLoaded] = useState(false);

  const subheaderOne = `// Software Developer`;
  const subheaderTwo = `// Full Stack`;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
      <section id="about" className=" flex h-screen bg-cover bg-center items-center">
        <div className="container flex py-20 flex-col items-center">
          <div className="lg:pr-24 flex flex-col items-center text-center mb-16 md:mb-0  w-3/4">
            <header
              className={`inline-block transform transition-transform duration-2 ease-in-[cubic-bezier(0.95,0.05,0.795,0.035] delay-200 duration-1000 ${
                isLoaded ? "translate-y-0" : "-translate-y-[500px]"
              } title-font text-4xl md:text-8xl lg:text-9xl font-medium text-teal`}
            >
              Jeff Muter,
            </header>
            <div
              className={`flex transform transition-transform ease-in-[cubic-bezier(0.95,0.05,0.795,0.035] delay-1000 duration-1000 ${
                isLoaded ? "translate-x-0" : "-translate-x-[1000px]"
              } title-font lg:text-2xl md:text-2xl text-sm mb-4 mt-2 font-medium text-coral `}
            >
              <span className="md:mx-5 lg:mx-5 mx-2">
                {subheaderOne}
              </span>
              <span className="md:mx-5 lg:mx-5 mx-2">
                {subheaderTwo}
              </span>
            </div>
          </div>
        </div>
      </section>
  );
};

export default About;

