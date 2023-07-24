import { skills } from "../data";
import Skill from "./Skill";
import {
  ChipIcon,
} from "@heroicons/react/solid";

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
         <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2" > 
           {skills.map((skill) => (
             <Skill skill={skill} />
           ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
