import React from "react";
import Banner from "../../assets/website/orange-background.avif";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-gray-100 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <div className="relative">
            <input
              data-aos="fade-up"
              type="text"
              placeholder="Enter email"
              className="w-full p-3 pl-5 pr-16 text-black rounded-lg border border-gray-300 shadow-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition"
            />
            <button
              data-aos="fade-up"
              className="absolute top-1 right-3 transform -translate-y-1/2 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
