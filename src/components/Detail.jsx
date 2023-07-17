import { useParams } from "react-router-dom";
import { useGetHouseDetailQuery } from "../api/houseApiService";
import r from "../../public/r.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetHouseDetailQuery(id);

  if (isLoading) {
    return (
      <div className="loader-container mt-28">
        <img src={r} className="loader" />
      </div>
    );
  }
  console.log(data);

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 px-72">
        <h1 className="font-bold text-2xl text-gray-500">{data.title}</h1>
        {data.location.map((l) => (
          <span key={l.id} className="mr-2 text-sm text-gray-400">
            {l.name}
          </span>
        ))}
        <Carousel>
          {data.photos.map((photo) => (
            <div key={photo.id} className="mt-10">
              <img src={photo.url} />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="container mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-2"></div>
      </div>
      <Footer />
    </>
  );
};

export default Detail;
