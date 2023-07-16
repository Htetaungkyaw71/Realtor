import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-20 bg-white h-24 container mx-auto flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-around items-center border-t-2 mt-20">
      <div>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-sky-400">Real</span>
          <span className="font-sanif text-gray-700">tor</span>
        </Link>
      </div>
      <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row justify-center text-center">
        <ul className="mr-0 sm:mr-0 md:mr-0 lg:mr-16 xl:mr-16 ">
          <li className="text-sky-300 font-bold mt-3">Services</li>
          <li className="text-gray-500 text-sm mt-3">Email Marketing</li>
          <li className="text-gray-500 text-sm mt-3">Campaigns</li>
        </ul>
        <ul className="mr-0 sm:mr-0 md:mr-0 lg:mr-16 xl:mr-16 ">
          <li className="text-sky-300 font-bold mt-3">About</li>
          <li className="text-gray-500 text-sm mt-3">Our Story</li>
          <li className="text-gray-500 text-sm mt-3">Benefits</li>
        </ul>
        <ul className="mr-0 sm:mr-0 md:mr-0 lg:mr-16 xl:mr-16 ">
          <li className="text-sky-300 font-bold mt-3">Follow us</li>
          <li className="text-gray-500 font-bold mt-3">
            <Link
              to={{ pathname: "https://www.facebook.com/htet.aungkyaw.33234/" }}
              target="_blank"
              className=""
            >
              <FaFacebook />
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/htetakyaw" }}
              target="_blank"
              className="ml-4 mr-4"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={{ pathname: "https://github.com/Htetaungkyaw71" }}
              target="_blank"
              className=""
            >
              <FaGithub />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
