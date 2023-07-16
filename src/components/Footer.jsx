import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="p-20 bg-white h-24 container mx-auto flex justify-around items-center border-t-2 mt-20">
      <div className="">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-sky-400">Real</span>
          <span className="font-sanif text-gray-700">tor</span>
        </Link>
      </div>
      <div className="flex">
        <ul className="mr-16">
          <li className="text-sky-300 font-bold">Services</li>
          <li className="text-gray-500 text-sm mt-3">Email Marketing</li>
          <li className="text-gray-500 text-sm mt-3">Campaigns</li>
        </ul>
        <ul className="mr-16">
          <li className="text-sky-300 font-bold">About</li>
          <li className="text-gray-500 text-sm mt-3">Our Story</li>
          <li className="text-gray-500 text-sm mt-3">Benefits</li>
        </ul>
        <ul className="mr-16">
          <li className="text-sky-300 font-bold">Follow us</li>
          <li className="text-gray-500 font-bold mt-3">
            <Link
              to={{ pathname: "https://www.facebook.com/htet.aungkyaw.33234/" }}
              target="_blank"
              className="mr-4"
            >
              <FaFacebook />
            </Link>
            <Link
              to={{ pathname: "https://www.linkedin.com/in/htetakyaw" }}
              target="_blank"
              className="mr-4"
            >
              <FaLinkedin />
            </Link>
            <Link
              to={{ pathname: "https://github.com/Htetaungkyaw71" }}
              target="_blank"
              className="mr-4"
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
