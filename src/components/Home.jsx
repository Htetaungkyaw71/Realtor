import { useGetHouseQuery } from "../api/houseApiService";
import Card from "./Card";

const Home = () => {
  const { data: houses, isLoading } = useGetHouseQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log(houses);

  return (
    <div className="bg-gray-300">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center px-4">
          {houses.map((house) => (
            <Card house={house} key={house.property_id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
