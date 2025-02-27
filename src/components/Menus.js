import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { menuData } from "../data/menu";

const Menus = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div className="w-full flex justify-center items-center mt-5">
        <ul className="flex gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-4 h-4 bg-gray-200 rounded-full transition-all duration-300 hover:bg-red-500 cursor-pointer"></div>
    ),
  };

  return (
    <section className="py-16 ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl font-semibold font-poppins text-center text-red-600 mb-4">
          Menu Spesial Kami 🍽️
        </h1>
        <p className="text-lg text-center font-poppins text-gray-600 mb-6">
          Pilih dari berbagai hidangan lezat yang kami tawarkan, dibuat dengan
          bahan berkualitas dan disajikan dengan cinta.
        </p>
        {Object.keys(menuData).map((category) => (
          <div key={category} className="mb-16 relative">
            <h2 className="text-3xl font-semibold text-red-700 capitalize mb-4 text-center">
              {category.replace(/([A-Z])/g, " $1").trim()}
            </h2>
            <Slider {...settings}>
              {menuData[category].map((item) => (
                <div key={item.id} className="px-2">
                  <div className="shadow-lg rounded-lg overflow-hidden bg-white">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-80 object-cover"
                    />
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menus;
