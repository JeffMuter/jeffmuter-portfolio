import { BadgeCheckIcon, ChevronDownIcon } from "@heroicons/react/solid";
import { useState } from "react";

const Skill = ({ skill }) => {
  const descriptionRaw = skill.description;

  const getColoredString = (str) => {
    const regex = /(\d+|\+)/g;
    const numbersAndOperator = str.match(regex);

    if (numbersAndOperator) {
      return str.split(regex).map((item, index) => {
        if (numbersAndOperator.includes(item)) {
          return (
            <span key={index} style={{ color: "#FF7F50" }}>
              {item}
            </span>
          );
        }
        return item;
      });
    } else {
      return str;
    }
  };

  const descriptionEdited = getColoredString(descriptionRaw);

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`p-2 m-2 bg-pink grid grid-cols-[60px,1fr,70px] rounded transform overflow-hidden transition-all duration-300 hover:box-shadow-teal ${
        isHovered ? " z-10 h-[115px]" : " h-16"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="col-start-1 col-end-1 w-auto h-8 ml-2 mt-2 flex-shrink-0" alt="skill logo" src={skill.logo} />
      <span className="col-start-2 col-end-2 self-start title-font font-medium text-teal mt-4 ml-2">
        {skill.title}
      </span>
      <div
        className="col-start-3 col-end-3 ml-auto w-12 h-full"
        id="skillCheckmark"
      >
        <div
          id="child"
          className="w-6 h-6 ease-in scale-100 hover:scale-125 duration-200 m-4"
        >
          <div
            className={`rounded-full ${
              isHovered
                ? "transition fade-in duration-300 border-teal border-2"
                : ""
            }`}
          >
            <ChevronDownIcon className="text-teal fill-teal w-4.5" />
          </div>
        </div>
      </div>
      <p className="col-start-1 col-end-4 text-teal text-sm ml-4">
        {descriptionEdited}
      </p>
    </div>
  );
};

export default Skill;
