import { useState } from "react";
import {
    BadgeCheckIcon,
    ChevronDownIcon,
  } from "@heroicons/react/solid";

const Skill =({ skill })=>{
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {setIsHovering(true)};
    const handleMouseLeave = () => {setIsHovering(false)};
    const expanded = isHovering 
    ? "transform transition-shadow duration-300 hover:box-shadow-teal hover:scale-y-2"
     : ""
    return (
        <div key={skill.id} className={`p-2 sm:w-1/2 w-full`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className={`bg-pink ${expanded} rounded flex relative`} >
          <BadgeCheckIcon className="text-teal fill-teal w-6 h-6 flex-shrink-0 m-4 mr-4" />
          <span className="title-font font-medium text-teal mt-4">
            {skill.title}
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

      </div>
    )
}
export default Skill;