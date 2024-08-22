import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "700",
  subsets: ["latin"],
});
const PortfolioHeader = () => {
  return (
    <div className="flex justify-between items-center m-4">
      <h1 className="leading-9	font-bold text-3xl ">TOM</h1>
      <img src="burger-menu-svgrepo-com.svg" className="w-6 h-6" />
    </div>
  );
};

export default PortfolioHeader;
