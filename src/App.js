import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import "tailwindcss/tailwind.css";


function App() {

  return (
    <div>
      <div id="tsparticles">
        <main className="bg-purple">
          <NavBar />
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
