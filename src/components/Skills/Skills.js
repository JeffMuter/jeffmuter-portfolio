import { skills } from "../data";
import Skill from "./Skill";
import { ChipIcon } from "@heroicons/react/solid";

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-center lg:w-full sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
