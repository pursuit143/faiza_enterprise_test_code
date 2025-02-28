import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const ProductImage = ({ productDetails }) => {
  const [mainImage, setMainImage] = useState(productDetails[0].largeImageUrl);

  const handleSmallImageClick = (imageUrl) => {
    setMainImage(imageUrl);
  };

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-0 transform translate-x-full z-10 cursor-pointer p-2 rounded-full bg-gray-200 opacity-70 hover:opacity-100 transition duration-300 max-sm:hidden"
      onClick={onClick}
      aria-label="Next slide"
    >
      <IoIosArrowDroprightCircle className="text-3xl text-gray-800" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-0 transform -translate-x-full z-10 cursor-pointer p-2 rounded-full bg-gray-200 opacity-70 hover:opacity-100 transition duration-300 max-sm:hidden"
      onClick={onClick}
      aria-label="Previous slide"
    >
      <IoIosArrowDropleftCircle className="text-3xl text-gray-800" />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: productDetails[0].smallImageUrl.length,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(6, productDetails[0].smallImageUrl.length),
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: Math.min(5, productDetails[0].smallImageUrl.length),
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: Math.min(4, productDetails[0].smallImageUrl.length),
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <div className="md:w-1/2 p-4 flex flex-col items-center">
      <div className="relative border border-white rounded-lg shadow-md bg-white w-full sm:w-[24rem]">
        <img
          src={mainImage}
          alt={productDetails[0].name}
          className="w-full rounded-lg"
        />
      </div>
      <div className="mt-4 w-full max-w-[25rem] px-2 md:px-0">
        <Slider {...settings}>
          {productDetails[0].smallImageUrl.map((imageUrl, index) => (
            <div key={index} className="px-1">
              <img
                src={imageUrl}
                alt={`Small Product ${index + 1}`}
                className={`w-16 h-16 sm:w-14 sm:h-14 rounded-md cursor-pointer flex-shrink-0 mx-auto ${
                  mainImage === imageUrl
                    ? "border-2 border-blue-500"
                    : "border border-gray-500"
                }`}
                onClick={() => handleSmallImageClick(imageUrl)}
                loading="lazy"
                aria-hidden={mainImage === imageUrl ? "false" : "true"}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductImage;