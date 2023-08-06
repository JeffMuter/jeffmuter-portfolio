import { CodeIcon } from "@heroicons/react/solid";

import { useState } from "react";
import { projects } from "../data";

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

  return (
    <section id="slideshow" className="w-full h-auto mt-20">
      <div className="flex flex-col w-full wb-20">
        <CodeIcon className="mx-auto inline-block w-10 wb-4 fill-teal" />
        <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font text-teal mb-8">
          Projects and References
        </h1>
      </div>
      <div className="m-10 relative h-[100vh] bg-pink">
        <h2 className="text-white">{slide.title}</h2>
        <img
          className="w-[100vw] h-[100vh] absolute top-0 left-0 bg-black opacity-100 transition-opacity duration-300 hover:opacity-70"
          alt="slideshow of projects I have completed"
          src={projects[currentIndex].image}
        />
        <div>
          <h1 className="text-white">{slide.title}</h1>
          <button
            type="button"
            className="bg-white relative z-50 cursor-pointer hover:bg-purple"
            onClick={handleNextSlide}
          >
            Next Slide
          </button>
          <button>See the Code</button>
          <button>See the Website</button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlideShow;
