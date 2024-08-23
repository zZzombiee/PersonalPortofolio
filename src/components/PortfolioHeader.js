import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "700",
  subsets: ["latin"],
});
const PortfolioHeader = () => {
  return (
    <div className="flex justify-between items-center m-4 xl:pl-8 xl:pr-8">
      <h1 className="leading-9	font-bold text-3xl ">TOM</h1>
      <div className="hidden lg:flex gap-6 justify-center items-center ">
        <p className="text-base text-gray-600">About</p>
        <p className="text-base text-gray-600">Work</p>
        <p className="text-base text-gray-600">Testimonials</p>
        <p className="text-base text-gray-600">Contact</p>
        <div className="border border-solid w-px h-6 border-gray-100"></div>
        <img src="SunIcon.svg" />
        <button className="bg-gray-900 text-gray-50 rounded-xl text-base pr-5 pl-5 pt-1 pb-1  ">
          Download CV
        </button>
      </div>
      <img src="burger-menu-svgrepo-com.svg" className="w-6 h-6 lg:hidden" />
    </div>
  );
};

export default PortfolioHeader;
