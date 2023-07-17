import { useGetAgencyQuery } from "../api/agencyApiService";
import r from "../../public/r.png";

/* eslint-disable react/prop-types */

const Agencies = () => {
  const { data: agencies, isLoading, isFetching } = useGetAgencyQuery();
  if (isLoading || isFetching) {
    return (
      <div className="loader-container1 text-center">
        <img src={r} className="loader" />
      </div>
    );
  }
  return (
    <>
      {agencies.map((agency) => (
        <div key={agency.id} className="w-60 h-72 rounded-lg  text-center">
          <img src={agency.logo.url} className="w-full h-60" />
          <h1 className="text-lg text-gray-500 font-bold">{agency.name}</h1>
        </div>
      ))}
    </>
  );
};

export default Agencies;
