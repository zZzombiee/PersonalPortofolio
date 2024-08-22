import Button from "./Button";
import Title from "./Title";
import Project from "./Project";

const Work = () => {
  return (
    <div className=" p-4 pb-16">
      <Button buttonText="Work" />
      <Title title="Some of the noteworthy projects I have built:" />
      <Project />
    </div>
  );
};

export default Work;
