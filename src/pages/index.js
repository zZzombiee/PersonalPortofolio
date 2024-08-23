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
    <div className="xl:max-w-7xl m-auto">
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
