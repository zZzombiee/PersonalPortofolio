import Button from "./Button";
import Title from "./Title";

const GetInTouch = () => {
  return (
    <div className="p-4 pb-16 ">
      <Button buttonText="Get In Touch" />
      <div className="lg:w-[576px] m-auto">
        <Title title="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <div className="flex gap-4 justify-center">
          <img src="MailIcon.svg" />
          <p className="text-lg text-gray-900 font-semibold lg:text-4xl dark:text-gray-50">
            tom@pinecone.mn
          </p>
          <img src="ShareIcon1.svg" />
        </div>
        <div className="flex gap-4 justify-center">
          <img src="PhoneIcon.svg" />
          <p className="text-lg text-gray-900 font-semibold lg:text-4xl dark:text-gray-50">
            +976 88112233
          </p>
          <img src="ShareIcon1.svg" />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className=" flex justify-center text-base text-gray-600 dark:text-gray-50">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center">
          <img src="Icon-Button-Cat.svg" />
          <img src="Icon-Button-Bird.svg" />
          <img src="Icon-Button-Figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
