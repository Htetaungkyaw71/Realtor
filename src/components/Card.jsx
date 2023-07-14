import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ house }) => {
  return (
    <Link to={`detail/${house.property_id}`}>
      <div className="bg-white w-60 p-2  mt-4 border-none rounded-xl">
        <div className="">
          <img src={house.primary_photo.href} className="w-full" />
          <b>{house.branding[0].name}</b>
        </div>
      </div>
    </Link>
  );
};

export default Card;
