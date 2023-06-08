//import Card from "../UI/Card";
//import classes from "./About.module.css";
import { useState, useEffect } from "react";
// import className from "classnames";

const About = (props) => {
  //intro section that says who I am, what I do, and has a nice background image
  //state change to check for mobile
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  //useEffect will change the state on page load for the animation meant to start on page load.
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  //"title-font text-3xl md:lg:text-5xl leading-tight mb-4 mt-7 font-medium text-teal"

  //effect to check for the screen size.
  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    handleResize(); // set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //changes the background for mobile because the background image makes it too difficult to read.
  const style = isMobile
    ? { backgroundColor: "#191919" }
    : { backgroundImage: "url(/background-home.jpg)" };

  return (
    <section id="about" className="h-screen bg-cover bg-center" style={style}>
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:pr-24 mr-auto flex flex-col items-start text-left font-gothicCentury mb-16 md:mb-0  w-1/2">
          <p className="title-font text-4xl md:text-5xl lg:text-7xl font-medium text-teal">
            Hello,
          </p>
          <p
            className={`inline-block transform transition-transform duration-1 ease-in-out ${
              isLoaded ? 'translate-x-0' : '-translate-x-full'
            } delay-500 title-font text-3xl md:lg:text-5xl leading-tight mb-4 mt-7 font-medium text-teal`}
          >
            My name is Jeff Muter, <br/> Software Developer, <br/> New Father, <br/> Planeswalker, <br/> Innovation Lover, <br/> Lifelong Learner
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
