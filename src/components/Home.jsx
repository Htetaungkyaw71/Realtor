import { useGetHouseQuery } from "../api/houseApiService";
import Card from "./Card";

const Home = () => {
  const { data: houses, isLoading } = useGetHouseQuery();

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  console.log(houses);

  return (
    <>
      <div className="container flex justify-center items-center round-lg bg-[url(./assets/home_bg.jpg)] rounded-lg mb-10 mt-28 w-full h-96  mx-auto bg-cover bg-no-repeat">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-600">
            Lets find a home
          </h1>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-5xl font-bold text-gray-600">
            thats perfect for you
          </h1>
          <p className="mt-5 text-gray-400">
            Search confidently with your trusted source homes for sale and rent
          </p>
        </div>
      </div>

      <div className="container mx-auto bg-gray-100 rounded-lg pt-16 px-5 sm:px-5 md:px-5 lg:px-5 xl:px-24">
        <div className="pl-0 xl:pl-3 lg:pl-10 mb-9 text-center sm:text-center md:text-center lg:text-left xl:text-left">
          <h1 className="text-sky-400 font-bold">Come Now!</h1>
          <h1 className="font-bold text-3xl text-gray-500">
            Live Who You Are.
          </h1>
          <p className="text-gray-400">Own the House Meant for You.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {houses.map((house) => (
            <Card house={house} key={house.property_id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
