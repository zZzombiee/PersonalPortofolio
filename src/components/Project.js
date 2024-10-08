import TagButton from "./TagButton";
import Share from "./iconsSVG/Share";

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

const Project = (props) => {
  const { img, title, text, key2 } = props;
  if (key2 % 2 == 1) {
    return (
      <div className="xl:mr-16 xl:ml-16 ">
        <div className="shadow-md rounded-xl mb-6 lg:flex ">
          <div className="xl:w-1/2 ">
            <img
              src={img}
              className="p-8 bg-gray-50 xl:w-full xl:h-[448px] dark:bg-gray-700"
            />
          </div>
          <div className="p-8 xl:w-1/2 dark:bg-gray-800">
            <p className="text-lg font-semibold pb-6 ">{title}</p>
            <p className="pb-6">{text}</p>
            <div className="flex flex-wrap gap-2 pb-6">
              {buttonTexts.map((buttonText, index) => {
                return (
                  <div key={index}>
                    <TagButton buttonText={buttonText} />
                  </div>
                );
              })}
            </div>
            <Share />
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="xl:mr-16 xl:ml-16 ">
        <div className="shadow-md rounded-xl mb-6 lg:flex flex-row-reverse">
          <div className="xl:w-1/2">
            <img
              src={img}
              className="p-8 bg-gray-50 xl:w-full xl:h-[448px] dark:bg-gray-700"
            />
          </div>
          <div className="p-8 xl:w-1/2 dark:bg-gray-800">
            <p className="text-lg font-semibold pb-6 ">{title}</p>
            <p className="pb-6">{text}</p>
            <div className="flex flex-wrap gap-2 pb-6">
              {buttonTexts.map((buttonText, index) => {
                return (
                  <div key={index}>
                    <TagButton buttonText={buttonText} />
                  </div>
                );
              })}
            </div>
            <Share />
          </div>
        </div>
      </div>
    );
  }
};

export default Project;
