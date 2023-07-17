import { FaMicrosoft, FaAmazon, FaAirbnb } from "react-icons/fa";
import { SiBasecamp } from "react-icons/si";

const TechCompanies = () => {
  return (
    <div>
      <h1 className="text-center text-gray-400">Trusted by 20000+ companies</h1>
      <div className="container flex justify-around items-center flex-wrap gap-10 text-gray-600 p-5 mb-10 mx-auto px-auto">
        <div className="text-3xl flex items-center">
          <FaMicrosoft />
          <span className="ml-2">Microsoft</span>
        </div>
        <div className="text-3xl flex items-center">
          <FaAmazon />
          <span className="ml-2">Amazon</span>
        </div>
        <div className="text-3xl flex items-center">
          <SiBasecamp />
          <span className="ml-2">Basecamp</span>
        </div>
        <div className="text-3xl flex items-center">
          <FaAirbnb />
          <span className="ml-2">Airbnb</span>
        </div>
      </div>
    </div>
  );
};

export default TechCompanies;
