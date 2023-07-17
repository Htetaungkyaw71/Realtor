import Card from "./Card";

/* eslint-disable react/prop-types */
const Results = ({ currentItems }) => {
  if (currentItems.length === 0) {
    return (
      <h1 className="text-center font-bold text-2xl text-sky-300 ">
        No House Found
      </h1>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
      {currentItems.map((house) => (
        <Card house={house} key={house.id} />
      ))}
    </div>
  );
};

export default Results;
