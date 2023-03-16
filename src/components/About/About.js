//import Card from "../UI/Card";
//import classes from "./About.module.css";
import { useRef } from "react";

const About = (props) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="about" className="h-screen">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-size: 9rem line-height: 1 mb-4 font-medium text-white">
            Hello There,
          </h1>
          <h1 className="title-font font-size: 9rem line-height: 1 mb-4 font-medium text-white">
            My name is Jeff Muter, a self-taught front end web developer.
          </h1>
        </div>
      </div>
    </section>
  );
};
export default About;
