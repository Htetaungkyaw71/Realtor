import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-wrap top-0 justify-around p-4 bg-white shadow-md items-center fixed w-full">
      <div>
        <Link to="/" className="text-2xl font-bold">
          <span className="text-sky-400">Real</span>
          <span className="font-sanif text-gray-700">tor</span>
        </Link>
      </div>
      <div className="text-center hidden md:block lg:block xl:block">
        <Link to="/" className="mr-6 text-md text-gray-600 font-semibold">
          Home
        </Link>
        <Link to="/" className="mr-6 text-md text-gray-600 font-semibold">
          How its work
        </Link>
        <Link to="/" className="mr-6 text-md text-gray-600 font-semibold">
          Agent
        </Link>
        <Link to="/" className="mr-6 text-md text-gray-600 font-semibold">
          Sales
        </Link>
      </div>
      <div>
        <button type="button" className="bg-sky-400 text-white p-2 rounded-lg">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
