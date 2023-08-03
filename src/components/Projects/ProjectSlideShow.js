import { useState } from "react";
import { projects } from "../data";
import { CodeIcon } from "@heroicons/react/solid";

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
    <section id="slideshow" className="w-full h-[100vh]">
      <div className="m-10">
        <div className="flex flex-col w-full wb-20">
          <CodeIcon className="mx-auto inline-block w-10 wb-4 fill-teal" />
          <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font text-teal mb-8">
            Apps I Have Built
          </h1>
        </div>
        <div>
          <h1 className="text-white">{slide.title}</h1>
          <button
            type="button"
            className="bg-white relative z-50 cursor-pointer hover:bg-purple"
            onClick={handleNextSlide}
          >
            Next Slide
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectSlideShow;
