import Background from "./components/Background/Background";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

import "tailwindcss/tailwind.css";

function App() {
  return (
    <div>
      <div>
        <main className="bg-purple font-montserrat font-bold">
          <NavBar />
          <Background />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
