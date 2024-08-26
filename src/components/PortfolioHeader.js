import { Rubik } from "next/font/google";
import BurgerMenu from "./iconsSVG/BurgerMenu";

const darkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

const rubik = Rubik({
  weight: "700",
  subsets: ["latin"],
});
const PortfolioHeader = () => {
  return (
    <div className="flex justify-between items-center m-4 xl:pl-8 xl:pr-8 pt-4">
      <h1 className="leading-9	font-bold text-3xl ">TOM</h1>
      <div className="hidden lg:flex gap-6 justify-center items-center">
        <p className="text-base text-gray-600 dark:text-gray-50 ">About</p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">Work</p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">
          Testimonials
        </p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">Contact</p>
        <div className="border border-solid w-px h-6 border-gray-100"></div>
        <img src="SunIcon.svg" onClick={darkMode} />
        <button className="bg-gray-900 text-gray-50 rounded-xl text-base pr-5 pl-5 pt-1 pb-1  dark:text-gray-600  dark:bg-gray-50  ">
          Download CV
        </button>
      </div>
      <div className="w-6 h-6 lg:hidden ">
        <BurgerMenu color="black" className="dark:hidden" />
        <BurgerMenu color="white" className="dark:block hidden" />
      </div>
    </div>
  );
};

export default PortfolioHeader;
