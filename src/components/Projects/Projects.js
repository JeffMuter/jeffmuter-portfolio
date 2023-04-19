import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

const Projects = () => {
  //displays 4 projects that link to their corresponding github when clicked. On hover, a description of the project appears.
  return (
    <section id="projects" className="text-white body-font mt-10">
      <div className="flex flex-col w-full wb-20">
        <CodeIcon className="mx-auto inline-block w-10 wb-4 fill-teal" />
        <h1 className="sm:text-4xl text-3xl mx-auto font-medium title-font text-teal mb-8">
          Apps I Have Built
        </h1>
      </div>
      {/* Container for all the project items */}
      <div className="flex flex-wrap h-260">
        {/* Mapping through all the projects */}
        {projects.map((project) => (
          <a
            href={project.link}
            key={project.image}
            target="_blank"
            rel="noreferrer"
            className="sm:w-1/2 w-100 p-4"
          >
            <div className="flex relative">
              {/* Project image */}
              <img
                alt="gallery"
                className="absolute inset-0 w-full h-full object-cover object-center"
                src={project.image}
              />
              <div className="px-8 py-10 relative z-2 w-full border-4 border-teal bg-purple opacity-0  hover:opacity-100">
                <h2 className="tracking-widest text-sm title-font font-medium mb-1">
                  {project.subtitle}
                </h2>
                <h1 className="title-font text-lg font-medium text-white mb-3">
                  {project.title}
                </h1>
                <p className="leading-relaxed">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
