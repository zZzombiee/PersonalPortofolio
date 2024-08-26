import PortfolioHeader from "@/components/PortfolioHeader";
import Nabar from "@/components/Nabar";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import GetInTouch from "@/components/GetInTouch";
import Footer from "@/components/Footer";

const PersonalPortfolio = () => {
  return (
    <div className="xl:max-w-7xl m-auto sm:max-w-xl lg:max-w-5xl dark:bg-gray-950 dark:text-gray-50">
      <div className="dark:bg-gray-950 dark:text-gray-50">
        <PortfolioHeader />
      </div>
      <div className="dark:bg-gray-950 dark:text-gray-50">
        <Nabar />
      </div>
      <div className="dark:bg-gray-900 dark:text-gray-50">
        <AboutMe />
      </div>
      <div className="dark:bg-gray-950 dark:text-gray-50">
        <Skills />
      </div>
      <div className="dark:bg-gray-900 dark:text-gray-50">
        <Experience />
      </div>
      <div className="dark:bg-gray-950 dark:text-gray-50">
        <Work />
      </div>
      <div className="dark:bg-gray-950 dark:text-gray-50">
        <GetInTouch />
      </div>
      <div className="dark:bg-gray-900 dark:text-gray-50">
        <Footer />
      </div>
    </div>
  );
};

export default PersonalPortfolio;
