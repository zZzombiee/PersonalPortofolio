import Button from "./Button";
import Title from "./Title";
import Project from "./Project";

const Work = () => {
  return (
    <div className="shadow-md  p-4">
      <Button buttonText="Work" />
      <Title title="Some of the noteworthy projects I have built:" />
      <Project />
    </div>
  );
};

export default Work;
