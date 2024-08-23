import Button from "./Button";
import Title from "./Title";
import Project from "./Project";

const projectTexts = [
  {
    key: 1,
    img: "ProjectUBcab.png",
    title: "UBCab",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    key: 2,
    img: "MentorHub.png",
    title: "Mentorhub",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    key: 3,
    img: "Itoim.png",
    title: "iToim",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
];

const Work = () => {
  return (
    <div className=" p-4 pb-16">
      <Button buttonText="Work" />
      <Title title="Some of the noteworthy projects I have built:" />
      {projectTexts.map((projectText, index) => {
        return (
          <Project
            key={index}
            text={projectText.text}
            img={projectText.img}
            title={projectText.title}
            key2={projectText.key}
          />
        );
      })}
    </div>
  );
};

export default Work;
