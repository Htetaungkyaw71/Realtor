import { useGetAgencyQuery } from "../api/agencyApiService";
// import r from "../../public/r.png";

/* eslint-disable react/prop-types */

const Agencies = () => {
  const { data: agencies, isLoading, isFetching } = useGetAgencyQuery();
  if (isLoading || isFetching) {
    return (
      <div className="loader-container1 flex justify-center text-center">
        {/* <img src={r} className="loader" /> */}
        <div className="bouncing-text">
          <div className="b">R</div>
          <div className="o">E</div>
          <div className="u">A</div>
          <div className="n">L</div>
          <div className="c">T</div>
          <div className="e">O</div>
          <div className="e">R</div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 justify-items-center">
        {agencies.map((agency) => (
          <div key={agency.id} className="w-60 h-72 rounded-lg  text-center">
            <img src={agency.logo.url} className="w-full h-60" />
            <h1 className="text-lg text-gray-500 font-bold">{agency.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default Agencies;
