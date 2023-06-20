//import Card from "../UI/Card";
//import classes from "./About.module.css";
import { useState, useEffect } from "react";
// import className from "classnames";

const About = (props) => {
  //intro section that says who I am, what I do, and has a nice background image
  const [isLoaded, setIsLoaded] = useState(false);

  //useEffect will change the state on page load for the animation meant to start on page load.
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      <section id="about" className="h-screen bg-cover bg-center">
        <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
          <div className="lg:pr-24 mr-auto flex flex-col items-start text-left font-gothicCentury mb-16 md:mb-0  w-1/2">
            <p className="title-font text-4xl md:text-5xl lg:text-7xl font-medium text-coral">
              Hello,
            </p>
            <p
              className={`inline-block transform transition-transform duration-2 ease-in-[cubic-bezier(0.95,0.05,0.795,0.035)] duration-1000 ${
                isLoaded ? "translate-x-0" : "-translate-x-full"
              } title-font lg:text-5xl md:text-5xl text-3xl mb-4 mt-7 font-medium text-teal`}
            >
              My name is Jeff Muter
              <br /> Software Developer
              <br /> New Father
              <br /> Planeswalker
              <br /> Innovation Lover
              <br /> Lifelong Learner
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
