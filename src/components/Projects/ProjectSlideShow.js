import { CodeIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { projects } from "../data";
import "./Slideshow.css";

const ProjectSlideShow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    console.log("click event is working");
    setCurrentIndex((prevIndex) => {
      if (prevIndex === projects.length - 1) {
        return 0;
      } else {
        return prevIndex + 1;
      }
    });
  };
  console.log("render");
  let slide = projects[currentIndex];

  //TODO add grid layout to this component to line the content up nicely
  return (
    <section id="slideshow" className="flex flex-col items-center justify-center w-full h-auto mt-20">
      <header className="text-center mb-8">
        <CodeIcon className="w-10 h-10 fill-teal mx-auto" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-teal">
          Projects and References
        </h1>
      </header>
      <section className="flex h-[80vh] w-[100vw] z-2">
        <ChevronLeftIcon className="relative h-[10vw] w-[15vw] mx-[3vw] fill-teal self-center" onClick={handleNextSlide} />
        <div class="grid-container">
          <div class="filler1"></div>
          <p class="slide-description" >{slide.description}</p>
          <p class="slide-title">{slide.title}</p>
          <div class="filler2"></div>
          <button class="slide-code-button">Website</button>
          <button class="slide-site-button">Code</button>
          <div class="filler3"></div>
          <p class="slide-tools"  dangerouslySetInnerHTML={{ __html: slide.subtitle }}></p>
        </div>
        <ChevronRightIcon className="relative h-[10vw] w-[15vw] mx-[3vw] fill-teal self-center" onClick={handleNextSlide}/>
      </section>
    </section>
  );
}

export default ProjectSlideShow;
