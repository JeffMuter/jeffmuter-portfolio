//import Card from "../UI/Card";
//import classes from "./About.module.css";

const About = () => {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font font-size: 9rem line-height: 1 mb-4 font-medium text-white">
            Hello,
          </h1>
          <h1 className="title-font font-size: 9rem line-height: 1 mb-4 font-medium text-white">
            My name is Jeff Muter. I am a self-taught web developer, frequently
            learning, strengthening, and progressing towards better web
            development.
          </h1>
          <p className="title-font font-size: 9rem line-height: 1 mb-4 font-medium text-white">
            Below you will see a list of websites I am most excited as to have
            made. I will relent that some of the technologies I have used are
            one-offs. Meaning I used a certain technology just to wrap my head
            around them, but I would not consider the technologies to be a part
            of my core skillset yet. You could say most of my skills are carried
            on React & JavaScript as I use them both in almost every project.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-pink border-0 py-2 px-6 focus:outline-none rounded text-lg title-font font-medium"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-pink border-0  py-2 px-6 focus:outline-none rounded text-lg title-font font-medium"
            >
              My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="Jeff Muter Profile"
            src="./profile-shot-0.jpg"
          />
        </div>
      </div>
    </section>
  );
};
export default About;
