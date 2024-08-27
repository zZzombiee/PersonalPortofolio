import Button from "./Button";
import Title from "./Title";
import Cat from "./iconsSVG/Cat";
import Figma from "./iconsSVG/Figma";
import Bird from "./iconsSVG/Bird";
import ShareIcon from "./iconsSVG/ShareIcon";
import Mail from "./iconsSVG/Mail";
import Phone from "./iconsSVG/Phone";

const GetInTouch = () => {
  return (
    <div className="p-4 pb-16 ">
      <Button buttonText="Get In Touch" />
      <div className="lg:w-[576px] m-auto">
        <Title title="What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect." />
      </div>
      <div className="flex flex-col gap-2 pb-6">
        <div className="flex gap-4 justify-center">
          <div className="flex justify-center items-center">
            <Mail />
          </div>
          <p className="text-lg text-gray-900 font-semibold lg:text-4xl dark:text-gray-50">
            tom@pinecone.mn
          </p>
          <div className="flex justify-center items-center">
            <ShareIcon />
          </div>
        </div>
        <div className="flex gap-4 justify-center">
          <div className="flex justify-center items-center">
            <Phone />
          </div>
          <p className="text-lg text-gray-900 font-semibold lg:text-4xl dark:text-gray-50">
            +976 88112233
          </p>
          <div className="flex justify-center items-center">
            <ShareIcon />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className=" flex justify-center text-base text-gray-600 dark:text-gray-50">
          You may also find me on these platforms!
        </p>
        <div className="flex justify-center">
          <Cat color="#4B5563" className="dark:hidden" />
          <Cat color="#D1D5DB" className="dark:block hidden" />
          <Bird color="#4B5563" className="dark:hidden" />
          <Bird color="#D1D5DB" className="dark:block hidden" />
          <Figma color="#4B5563" className="dark:hidden" />
          <Figma color="#D1D5DB" className="dark:block hidden" />
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
