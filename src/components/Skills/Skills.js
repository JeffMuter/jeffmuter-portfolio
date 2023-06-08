import React from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";

const Skills = () => {
  //show a list of major&minor tech skills in two columns, using icons to make it visually appealing
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 fill-teal drop-shadow-lg" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-teal mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-pink rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-teal fill-teal w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-teal">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
