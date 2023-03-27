//import Card from "../UI/Card";
//import classes from "./About.module.css";

const About = (props) => {
  return (
    <section
      id="about"
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/background-home.jpg)" }}
    >
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:pr-24 mr- flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center w-1/3">
          <p className="title-font text-5xl mb-4 font-medium text-red-400 !important">
            Hello There,
          </p>
          <p className="title-font text-5xl mb-4 font-medium text-white">
            My name is Jeff Muter, a self-taught front end web developer.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
