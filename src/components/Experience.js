import Button from "./Button";
import Upwork from "./Upwork";
import Title from "./Title";

const Experience = () => {
  return (
    <div className="bg-gray-50 pb-16">
      <Button buttonText="Experience" />
      <Title title="Here is a quick summary of my most recent experiences:" />
      <Upwork />
    </div>
  );
};

export default Experience;
