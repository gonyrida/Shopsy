import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Rida Doe",
    text: "The input field and button are clean and well-aligned. The backdrop blur adds a nice touch, making the design stand out. Adding a hover effect on the button and lighter placeholder text would improve usability.",
    img: "https://i.pinimg.com/736x/d6/31/c2/d631c24e7bb57fd94542d3fa05aeaab8.jpg",
  },
  {
    id: 2,
    name: "Jane Doe",
    text: "Great layout with a modern look! The input field is functional, but slight adjustments to padding and a clearer placeholder text could enhance user experience. The background styling is a strong visual feature.",
    img: "https://i.pinimg.com/736x/6c/a3/fb/6ca3fb858339f2e4e2b20e43318306b7.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    text: "The design is visually appealing with a good balance of elements. Adding a hover effect for the button and more distinct focus styling for the input field could improve interactivity and accessibility.",
    img: "https://i.pinimg.com/736x/ae/7c/bc/ae7cbc4ae7bb5c0208ef073cb74514ea.jpg",
  },
];
const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    CssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="py-10 mb-10">
      <div className="container mx-auto py-12 sm:py-0">
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            What Our Customers accent-amber-300re Saying
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Testimonials
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum is simply dummy text
          </p>
        </div>
        {/* Testimonials cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img src={data.img} className="rounded-full w-20 h-20" />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs font-bold">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-light">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    "
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
