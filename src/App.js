import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <main className="flex flex-col bg-purple body-font">
      <NavBar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}

export default App;
