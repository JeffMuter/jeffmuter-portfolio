// import { useState, useReducer } from "react";
import { skills } from "../data";
import {
  BadgeCheckIcon,
  ChipIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";


const Skills = () => {


  // reducer function initial. Updates mapped div states.
// const reducer = (state, action) => {
//   let expanded = false;
  
//   return expanded;
// }

  // I want the skill divs to expand onClick and collapse onClick & off of the element
  // const expandSkillOnClick = (skill) => {
  //   setOpen(!open)
  // }
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4 fill-teal drop-shadow-lg" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-teal mb-4">
            Technical Skills
          </h1>
        </div>
{/* onClick={expandSkillOnClick} */}
         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" > 
          {skills.map((skills) => (
            <div key={skills} className="p-2 sm:w-1/2 w-full" >
              <div className="bg-pink rounded flex relative transition-shadow duration-300 hover:box-shadow-teal focus:h-32" >
                <BadgeCheckIcon className="text-teal fill-teal w-6 h-6 flex-shrink-0 m-4 mr-4" />
                <span className="title-font font-medium text-teal mt-4">
                  {skills.title}
                </span>
                <div className="ml-auto w-12 h-full">
                  <div
                    id="child"
                    className="w-6 h-6 ease-in scale-100 hover:scale-125 duration-200 m-4"
                  >
                    <div className="rounded-full transition ease-out duration-200 hover:border-teal hover:border-2">
                      <ChevronDownIcon className="text-teal fill-teal w-4.5" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div>
              { open && <div> <p className="bg-pink text-teal">{skill.description}</p></div> }
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
