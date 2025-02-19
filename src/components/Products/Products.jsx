import React from "react";
import Img1 from "../../assets/women/women1.png";
import Img2 from "../../assets/women/women2.jpg";
import Img3 from "../../assets/women/women3.jpg";
import Img4 from "../../assets/women/women4.jpg";
import Img5 from "../../assets/women/women5.jpg"; // Added import for Img5
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    name: "Women Ethnic",
    rating: 5.0,
    color: "White",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    name: "Men Casual",
    rating: 4.5,
    color: "Black",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    name: "Women Western",
    rating: 4.5,
    color: "Red",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    name: "Printed T-shirt",
    rating: 4.5,
    color: "Yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    name: "Fashionable",
    rating: 4.5,
    color: "Pink",
    aosDelay: "800",
  },
];

const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text
          </p>
        </div>
        {/* Body section */}
        <div>
          <div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4
            lg:grid-cols-5 place-items-center gap-4 mt-10"
          >
            {/* Card section */}
            {ProductsData.map((data) => {
              return (
                // Added return statement
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3"
                >
                  <img
                    src={data.img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md"
                  />
                  <div>
                    <h3 className="font-semibold">{data.name}</h3>{" "}
                    {/* Fixed from data.title to item.name */}
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-400" />
                      <span className="text-gray-400">{data.rating}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* view all btn */}
          <div className="flex justify-center mt-10">
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-secondary transition">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
