/* eslint-disable react/prop-types */
import { useState } from "react";
import { useGetHouseQuery } from "../api/houseApiService";
import ReactPaginate from "react-paginate";
import Card from "./Card";
import r from "../../public/r.png";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = ({ itemsPerPage }) => {
  const [itemOffset, setItemOffset] = useState(0);
  const [data, setData] = useState({
    purpose: "for-rent",
    rentFrequency: "monthly",
    priceMin: 0,
    priceMax: 1000000,
    furnishingStatus: "furnished",
  });
  const { data: houses, isLoading } = useGetHouseQuery(data);

  if (isLoading) {
    return (
      <div className="loader-container mt-28">
        <img src={r} className="loader" />
      </div>
    );
  }

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = houses.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(houses.length / itemsPerPage);
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % houses.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Navbar />
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
        <div className="pl-0 xl:pl-3 lg:pl-10 mb-9 text-center sm:text-center md:text-center lg:text-left xl:text-left grid grid-cols-4 gap-4 justify-items-center items-center">
          <div>
            <h1 className="text-sky-400 font-bold">Come Now!</h1>
            <h1 className="font-bold text-3xl text-gray-500">
              Live Who You Are.
            </h1>
            <p className="text-gray-400">Own the House Meant for You.</p>
          </div>
          <div className="col-span-3">
            <form
              className="flex gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                let formData = new FormData(e.target);
                let min = formData.get("priceMin");
                let max = formData.get("priceMax");
                let obj = {
                  purpose: formData.get("purpose") ?? "",
                  rentFrequency: formData.get("rentFrequency") ?? "",
                  priceMin: +min ?? 0,
                  priceMax: +max ?? 0,
                  furnishingStatus: formData.get("furnishingStatus") ?? "",
                };
                setData(obj);
              }}
            >
              <div>
                <label className="block  text-sky-300 capitalize ">
                  purpose
                </label>
                <select
                  name="purpose"
                  className="p-2 text-gray-500 mt-1 rounded-lg focus:outline-none focus:ring focus:border-sky-300"
                >
                  <option value="for-rent">for-rent</option>
                  <option value="for-sell">for-sell</option>
                </select>
              </div>
              <div>
                <label className="block text-sky-300 capitalize">
                  Frequency
                </label>
                <select
                  name="rentFrequency"
                  className="p-2 text-gray-500 mt-1 rounded-lg focus:outline-none focus:ring focus:border-sky-300"
                >
                  <option value="monthly">monthly</option>
                  <option value="yearly">yearly</option>
                  <option value="weekly">weekly</option>
                  <option value="daily">daily</option>
                </select>
              </div>
              <div>
                <label className="block text-sky-300 capitalize">
                  PriceMin
                </label>
                <input
                  name="priceMin"
                  min={0}
                  type="number"
                  className="p-1.5 w-24 text-gray-500 mt-1 rounded-lg focus:outline-none focus:ring focus:border-sky-300"
                />
              </div>
              <div>
                <label className="block text-sky-300 capitalize">
                  PriceMax
                </label>
                <input
                  name="priceMax"
                  min={10000}
                  type="number"
                  className="p-1.5 w-24 text-gray-500 mt-1 rounded-lg focus:outline-none focus:ring focus:border-sky-300"
                />
              </div>
              <div>
                <label className="block text-sky-300 capitalize">
                  furnishingStatus
                </label>
                <select
                  name="furnishingStatus"
                  className="p-2 text-gray-500 mt-1 rounded-lg focus:outline-none focus:ring focus:border-sky-300"
                >
                  <option value="furnished">furnished</option>
                  <option value="unfurnished">unfurnished</option>
                </select>
              </div>

              <button
                type="submit"
                className="bg-sky-300 p-1 text-white rounded-lg h-10 px-3 mt-4"
              >
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {currentItems.length > 0 ? (
            currentItems.map((house) => <Card house={house} key={house.id} />)
          ) : (
            <h1>No House</h1>
          )}
        </div>
        <div className="main-pagination">
          <ReactPaginate
            breakLabel="..."
            nextLabel="&raquo;"
            onPageChange={handlePageClick}
            pageRangeDisplayed={2}
            pageCount={pageCount}
            previousLabel="&laquo;"
            renderOnZeroPageCount={null}
            className="pagination"
          />
        </div>
        ;
      </div>
      <Footer />
    </>
  );
};

export default Home;
