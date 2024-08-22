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
const projectTexts = [
  {
    img: "ProjectUBcab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    img: "MentorHub.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    img: "Itoim.png",
    title: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Project = () => {
  return (
    <div className="shadow-md rounded-lg ">
      {projectTexts.map((projectText) => {
        return (
          <>
            <img src={projectText.img} className="p-8 bg-gray-50" />
            <div className="p-8">
              <p className="text-lg font-semibold pb-6">{projectText.title}</p>
              <p className="pb-6">{projectText.text} </p>
              <div className="flex flex-wrap gap-2 pb-6">
                {buttonTexts.map((buttonText) => {
                  return (
                    <div>
                      <TagButton buttonText={buttonText} />
                    </div>
                  );
                })}
              </div>
              <img src="ShareIcon.svg" />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Project;
