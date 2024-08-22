import TagButton from "./TagButton";

const buttonTexts = [
  "React",
  "Next.js",
  "Typescript",
  "Nest.js",
  "PostgreSQL",
  "Tailwindcss",
  "Figma",
  "Cypress",
  "Storybook",
  "Git",
];

const Project = () => {
  return (
    <div className="shadow-md rounded-lg ">
      <img src="ProjectUBcab.png" className="p-8 bg-gray-50" />
      <div className="p-8">
        <p className="text-lg font-semibold pb-6">UBCab</p>
        <p className="pb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec
          urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae.
        </p>
        <div className="flex flex-wrap gap-2 pb-6">
          {buttonTexts.map((buttonText) => {
            return (
              <div className="">
                <TagButton buttonText={buttonText} />
              </div>
            );
          })}
        </div>
        <img src="ShareIcon.svg" className="pb-6" />
      </div>
    </div>
  );
};

export default Project;
