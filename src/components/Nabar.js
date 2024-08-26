import Location from "./iconsSVG/Location";

const Nabar = () => {
  return (
    <div className="m-4 lg:flex lg:gap-12 lg:flex-row-reverse  ">
      <div className="lg:w-1/2">
        <img
          src="image.png"
          className="h-[280px] w-[240px] m-auto mt-16 lg:mr-8 lg:h-[320px] lg:w-[280px] object-cover"
        />
      </div>
      <div className="lg:w-1/2 lg:ml-8 ">
        <h1 className="font-sans font-semibold text-4xl mt-12 lg:text-6xl">
          Hi, I'm Tom 👋
        </h1>
        <p className="mt-2 text-gray-600 text-base font-light dark:text-gray-200">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex items-center  text-gray-600 gap-2 mt-8 dark:text-gray-200">
          <Location color="#4B5563" className="dark:hidden" />
          <Location color="#D1D5DB" className="dark:block hidden" />
          <p className="">Ulaanbaatar, Mongolia</p>
        </div>
        <div className="flex items-center  text-gray-600 mt-2 mb-8 gap-2 dark:text-gray-200">
          <img src="Icon-dot.svg" />
          <p className="">Available for new projects</p>
        </div>
        <div className="flex pb-16 ">
          <img src="Icon-Button-Cat.svg" />
          <img src="Icon-Button-Bird.svg" />
          <img src="Icon-Button-Figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Nabar;
