import { Link } from "react-router-dom";
import { FaBath } from "react-icons/fa";
import { BsFillDoorOpenFill } from "react-icons/bs";

/* eslint-disable react/prop-types */
const Card = ({ house }) => {
  return (
    <Link to={`detail/${house.id}`}>
      <div className="bg-white w-80 sm:w-60 md:w-80 lg:w-full xl:w-full p-2 mt-4 border-none rounded-xl">
        <div className="">
          <img src={house.coverPhoto.url} className="w-full h-48" />
          <div className="flex justify-between mt-5">
            <h1 className="text-gray-500 font-bold text-md">
              {house.location[house.location.length - 1].name}
            </h1>
            <div className="text-sky-300 font-bold">${house.price}</div>
          </div>
          <div className="mt-1 flex justify-between">
            <div>
              <span className="text-gray-500 text-sm  mr-4">
                {house.baths}{" "}
                <span className="text-sky-300">
                  <FaBath />
                </span>
              </span>
              <span className="text-gray-500 text-sm mr-4">
                {house.rooms}{" "}
                <span className="text-sky-300">
                  <BsFillDoorOpenFill />
                </span>
              </span>
            </div>
            <div>
              <span className="text-gray-500  text-sm">{house.purpose}</span>
              <span className="text-gray-500  text-sm">
                /{house.rentFrequency}
              </span>
            </div>
          </div>
          <div className="text-gray-400 text-sm mt-2 h-16 capitalize">
            {house.title}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
