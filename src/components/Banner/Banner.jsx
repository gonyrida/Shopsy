import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
          {/* Image section */}
          <div className="flex justify-center" data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="Banner Image"
              className="max-w-[400px] h-[350px] w-full 
              mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* Text details section */}
          <div className="flex flex-col justify-center gap-6 sm:pt-0">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
              Winter Sale Up to 50% Off
            </h1>
            <p data-aos="fade-up" className="text-sm text-gray-600 tracking-wide leading-5 text-center sm:text-left">
              Get the best deals on our winter collection.
            </p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
                  dark:bg-violet-400"
                />
                <p>Quality Product</p>
              </div>
              <div className="flex items-center gap-4">
                <IoFastFood
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100
                  dark:bg-yellow-400"
                />
                <p>Fast Delivery</p>
              </div>
              <div className="flex items-center gap-4">
                <GiFoodTruck
                  className="text-4xl h-12 w-12 shadow-sm
                  p-4 rounded-full bg-green-100 dark:bg-green-400"
                />
                <p>Easy Payment method</p>
              </div>
              <div className="flex items-center gap-4">
                <GrSecure
                  className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100
                  dark:bg-violet-400"
                />
                <p>Get Offers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
