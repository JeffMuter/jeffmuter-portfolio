import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
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

  //TODO add dynamic styling and effects
  return (
    <section id="slideshow" className="flex flex-col items-center justify-center w-full h-[100vh]">
      <section className="flex h-[80vh] w-[100vw] z-2">
        <ChevronLeftIcon className="relative h-[10vw] w-[15vw] fill-teal self-center" onClick={handleNextSlide} />
        <div class="grid-container" style={{ backgroundImage: `url(${slide.image})` }}>
          <div class="filler1 appear-when-hover"></div>
          <p class="slide-description appear-when-hover" >{slide.description}</p>
          <p class="slide-title appear-when-hover">{slide.title}</p>
          <div class="filler2 appear-when-hover"></div>
          <button class="slide-code-button appear-when-hover">Website</button>
          <button class="slide-site-button appear-when-hover">Code</button>
          <div class="filler3 appear-when-hover"></div>
          <p class="slide-tools appear-when-hover"  dangerouslySetInnerHTML={{ __html: slide.subtitle }}></p>
        </div>
        <ChevronRightIcon className="relative h-[10vw] w-[15vw] fill-teal self-center" onClick={handleNextSlide}/>
      </section>
    </section>
  );
}

export default ProjectSlideShow;
