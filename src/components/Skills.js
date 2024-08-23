import Button from "@/components/Button";
import Title from "./Title";

const iconDatas = [
  { icon: "JavascriptIcon.svg", name: "Javascript" },
  { icon: "TypescriptIcon.svg", name: "Typescript" },
  { icon: "ReactIcon.svg", name: "React" },
  { icon: "NextjsIcon.svg", name: "Next.js" },
  { icon: "NodejsIcon.svg", name: "Node.js" },
  { icon: "ExpressIcon.svg", name: "Express.js" },
  { icon: "NestIcon.svg", name: "Nest.js" },
  { icon: "Sockedicon.svg", name: "Socked.io" },
  { icon: "PostgresqlIcon.jpg", name: "PostgreSQL" },
  { icon: "MongodbIcon.svg", name: "MongoDB" },
  { icon: "SassIcon.svg", name: "Sass/Scss" },
  { icon: "TailwindcssIcon.svg", name: "Tailwindcss" },
  { icon: "FigmaIcon.svg", name: "Figma" },
  { icon: "CypressIcon.svg", name: "Cypress" },
  { icon: "StorybookIcon.svg", name: "Storybook" },
  { icon: "GitIcon.svg", name: "Git" },
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
              <img src={icondata.icon} />
              <p className="text-gray-600 text-base font-normal">
                {icondata.name}
              </p>
            </div>
          );
        })}
        {/* <img src={icons[0].icon} />
      <p>{icons[0].name}</p> */}
      </div>
    </div>
  );
};
export default Skills;
