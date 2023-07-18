/* eslint-disable no-unused-vars */
import React from "react";
import { useGetHouseDetailQuery } from "../api/houseApiService";
import { useParams } from "react-router-dom";
import r from "../../public/r.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaBath } from "react-icons/fa";
import { BsFillDoorOpenFill } from "react-icons/bs";
import { MapContainer, TileLayer, Marker } from "react-leaflet";

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
  const position = [data.geography.lat, data.geography.lng];
  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-28 px-5 sm:px-10 md:px-10 lg:px-44 xl:px-72">
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

        <div className="justify-items-center mt-10 ">
          <div>
            <div className="flex flex-wrap justify-between items-center">
              <h1 className="font-bold text-2xl text-gray-500">
                {data.agency.name}
              </h1>
              <img
                src={data.agency.logo.url}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex justify-between items-center mt-10">
              <div>
                <span className="text-gray-500 text-lg mr-4">
                  {data.baths}{" "}
                  <span className="text-sky-300">
                    <FaBath />
                  </span>
                </span>
                <span className="text-gray-500 text-lg mr-4">
                  {data.rooms}{" "}
                  <span className="text-sky-300">
                    <BsFillDoorOpenFill />
                  </span>
                </span>
              </div>
              <div>
                <span className="text-gray-500  text-xl mr-4">
                  $ {data.price}
                </span>
                <span className="text-gray-500  text-lg">{data.purpose}</span>
                <span className="text-gray-500  text-lg">
                  /{data.rentFrequency}
                </span>
              </div>
            </div>

            <div className="mt-10">
              <div className=" flex flex-wrap">
                {data.amenities.map((a) => (
                  <div
                    className="text-white text-lg mr-4 bg-sky-300 p-2 rounded-lg mb-3 "
                    key={a.externalGroupID}
                  >
                    {a.text}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-2xl text-gray-500">Contact</h1>
              <div className="mt-2">
                <span className="text-lg text-gray-400 mr-5">Name:</span>
                <span className=" text-lg text-gray-400">
                  {data.contactName}
                </span>
              </div>
              <div>
                <span className=" text-lg text-gray-400 mr-5">
                  phoneNumber:
                </span>
                <span className="text-lg text-gray-400">
                  {data.phoneNumber.mobile}
                </span>
              </div>
            </div>
            <div className="mt-10">
              <h1 className="font-bold text-2xl text-gray-500">Description</h1>
              <p className="text-lg text-gray-400 mt-2 ">{data.description}</p>
            </div>
            {/* Map */}
            <div className="mt-10 mb-10">
              <MapContainer
                center={position}
                zoom={13}
                scrollWheelZoom={true}
                className="h-96"
              >
                <TileLayer
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}></Marker>
              </MapContainer>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Detail;
