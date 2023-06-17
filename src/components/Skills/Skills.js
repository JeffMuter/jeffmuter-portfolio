import React from "react";
import { BadgeCheckIcon, ChipIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { skills } from "../data";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 fill-teal drop-shadow-lg" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-teal mb-4">
            Technical Skills
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-pink rounded flex relative">
                <BadgeCheckIcon className="text-teal fill-teal w-6 h-6 flex-shrink-0 m-4 mr-4" />
                <span className="title-font font-medium text-teal mt-4">
                  {skill}
                </span>
                <div className="ml-auto w-12 h-full">
                  <div id="child" className="w-6 h-6 ease-in scale-100 hover:scale-125 duration-200 m-4">
                    <div className="rounded-full transition ease-out duration-200 hover:border-teal hover:border-2">
                      <ChevronDownIcon className="text-teal fill-teal w-4.5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
