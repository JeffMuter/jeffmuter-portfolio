import React from "react";
import Background from "../components/Background/Background";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import ProjectSlideShow from "../components/Projects/ProjectSlideShow";

const Home = () => {
  return (
    <main className="bg-purple font-comfortaa">
      <NavBar />
      <Background />
      <About className="flex items-center" />
      <Skills />
      <Projects />
      <ProjectSlideShow />
      <Contact />
    </main>
  );
};

export default Home;
