import Button from "@/components/Button";
import Title from "./Title";
import Express from "./iconsSVG/Express";
import JavaScript from "./iconsSVG/JavaScript";
import Typescript from "./iconsSVG/Typescript";
import React from "./iconsSVG/React";
import Next from "./iconsSVG/Next";
import Node from "./iconsSVG/Node";
import Nest from "./iconsSVG/Nest";
import Socked from "./iconsSVG/Socked";
import Postgresql from "./iconsSVG/Postgresql";
import Mongodb from "./iconsSVG/Mongodb";
import Sass from "./iconsSVG/Sass";
import Tailwindcss from "./iconsSVG/Tailwindcss";
import FigmaIcon from "./iconsSVG/FigmaIcon";
import Cypress from "./iconsSVG/Cypress";
import Storybook from "./iconsSVG/Storybook";
import Git from "./iconsSVG/Git";

const iconDatas = [
  { icon: <JavaScript />, name: "Javascript" },
  { icon: <Typescript />, name: "Typescript" },
  { icon: <React />, name: "React" },
  { icon: <Next />, name: "Next.js" },
  { icon: <Node />, name: "Node.js" },
  { icon: <Express />, name: "Express.js" },
  { icon: <Nest />, name: "Nest.js" },
  { icon: <Socked className="" color="white" />, name: "Socked.io" },
  { icon: <Postgresql />, name: "PostgreSQL" },
  { icon: <Mongodb />, name: "MongoDB" },
  { icon: <Sass />, name: "Sass/Scss" },
  { icon: <Tailwindcss />, name: "Tailwindcss" },
  { icon: <FigmaIcon />, name: "Figma" },
  { icon: <Cypress />, name: "Cypress" },
  { icon: <Storybook />, name: "Storybook" },
  { icon: <Git />, name: "Git" },
];

const Skills = () => {
  return (
    <div>
      <Button buttonText="Skills" />
      <Title title="The skills, tools and technologies I am really good at:" />
      <div className="grid grid-cols-3 place-content-center mb-16 lg:grid-cols-5 xl:grid-cols-8 xl:mt-12">
        {iconDatas.map((icondata, index) => {
          return (
            <div
              className="flex flex-col items-center mb-4 gap-2 h-24"
              key={index}
            >
              {/* <img src={icondata.icon} /> */}
              {icondata.icon}
              <p className="text-gray-600 text-base font-normal dark:text-gray-200">
                {icondata.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Skills;
