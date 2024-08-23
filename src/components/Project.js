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

const Project = (key, img, title, text) => {
  return console.log(title);
  //   <div className="xl:mr-16 xl:ml-16">
  //     <div className="shadow-md rounded-xl mb-6 xl:flex ">
  //       <div className="xl:w-1/2">
  //         <img
  //           key={key}
  //           src={img}
  //           className="p-8 bg-gray-50 xl:w-[544px] xl:h-[448px]"
  //         />
  //       </div>
  //       <div className="p-8 xl:w-1/2">
  //         <p className="text-lg font-semibold pb-6 " key={key}>
  //           {title}
  //         </p>
  //         <p className="pb-6" key={key}>
  //           {text}
  //         </p>
  //         <div className="flex flex-wrap gap-2 pb-6">
  //           {buttonTexts.map((buttonText, index) => {
  //             return (
  //               <div key={index}>
  //                 <TagButton buttonText={buttonText} />
  //               </div>
  //             );
  //           })}
  //         </div>
  //         <img src="ShareIcon.svg" />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Project;
