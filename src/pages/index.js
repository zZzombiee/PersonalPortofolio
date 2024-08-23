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
    <div className="  :max-w-7xl m-auto sm:max-w-xl lg:max-w-5xl">
      <PortfolioHeader />
      <Nabar />
      <AboutMe />
      <Skills />
      <Experience />
      <Work />
      <GetInTouch />
      <Footer />
    </div>
  );
};

export default PersonalPortfolio;
