import { Rubik } from "next/font/google";
import BurgerMenu from "./iconsSVG/BurgerMenu";
import Sun from "./iconsSVG/Sun";
import { IoCloseOutline } from "react-icons/io5";

const darkMode = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

const rubik = Rubik({
  weight: "900",
  subsets: ["latin"],
});
const PortfolioHeader = () => {
  return (
    <div className="flex justify-between items-center mx-4 xl:pl-8 xl:pr-8 pt-4">
      <h1
        className="leading-9	font-bold text-3xl tracking-tight"
        style={rubik.style}
      >
        TOM
      </h1>
      <div className="hidden lg:flex gap-6 justify-center items-center">
        <p className="text-base text-gray-600 dark:text-gray-50 ">About</p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">Work</p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">
          Testimonials
        </p>
        <p className="text-base text-gray-600 dark:text-gray-50 ">Contact</p>
        <div className="border border-solid w-px h-6 border-gray-100"></div>
        <button onClick={darkMode}>
          <Sun />
        </button>
        <button className="bg-gray-900 text-gray-50 rounded-xl text-base pr-5 pl-5 pt-1 pb-1  dark:text-gray-600  dark:bg-gray-50  ">
          Download CV
        </button>
      </div>
      <div className="w-6 h-6 lg:hidden">
        <div className="drawer drawer-end">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className=" drawer-button">
              <BurgerMenu className="dark:hidden" />
            </label>
          </div>
          <div className="drawer-side ">
            <label
              htmlFor="my-drawer"
              aria-label="close sidebar"
              className="drawer-overlay "
            ></label>
            <ul className="menu bg-white text-base-content min-h-full w-80 dark:bg-black dark:text-white">
              {/* Sidebar content here */}
              <div className="flex justify-between items-center p-4 border-b border-solid  dark:border-gray-900 border-gray-100">
                <h1
                  className="leading-9 font-bold text-3xl tracking-tight flex items-center "
                  style={rubik.style}
                >
                  TOM
                </h1>
                <label htmlFor="my-drawer">
                  <IoCloseOutline className="h-6 w-6 text-gray-700 dark:text-gray-200 " />
                </label>
              </div>
              <div className="border-b border-solid border-gray-100 dark:border-gray-900">
                <li>
                  <p>About</p>
                </li>
                <li>
                  <p>Work</p>
                </li>
                <li>
                  <p>Testimonials</p>
                </li>
                <li>
                  <p>Contact</p>
                </li>
              </div>
              <li className="py-2">
                <p className="flex justify-between">
                  Switch Theme
                  <button onClick={darkMode}>
                    <Sun />
                  </button>
                </p>
              </li>
              <button className="bg-gray-900 text-gray-50 rounded-xl text-base pr-5 pl-5 pt-1 pb-1  dark:text-gray-600  dark:bg-gray-50 mx-4 ">
                Download CV
              </button>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioHeader;
