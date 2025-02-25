import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const ProductCarousel = (props) => {
  const CustomNextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer p-2 rounded-full bg-gray-200 opacity-70 hover:opacity-100 transition duration-300 max-sm:hidden"
      onClick={onClick}
      aria-label="Next slide">
      <IoIosArrowDroprightCircle className="text-3xl text-gray-800" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer p-2 rounded-full bg-gray-200 opacity-70 hover:opacity-100 transition duration-300 max-sm:hidden"
      onClick={onClick}
      aria-label="Previous slide">
      <IoIosArrowDropleftCircle className="text-3xl text-gray-800" />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    centerMode: false, 
    centerPadding: '0',
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 0
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 0,
        }
      }
    ],
  };

  const productData = [
    {
      id: 1,
      name: "Ashirvaad Milk 1",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 2,
      name: "Ashirvaad Milk 2",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 3,
      name: "Ashirvaad Milk 3",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 4,
      name: "Ashirvaad Milk 4",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 5,
      name: "Ashirvaad Milk 5",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 6,
      name: "Ashirvaad Milk 6",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
    {
      id: 7,
      name: "Ashirvaad Milk 7",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
    },
  ];

  return (
    <div className="relative w-[98%] mx-auto rounded overflow-hidden my-5">
      <h1 className='font-semibold text-xl tracking-wider ml-4 mb-5 md:text-2xl'>
      {props.title || "Product Carousel"}
      </h1>
      <Slider {...settings}>
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex justify-center"
            >
            <Card image_Url={product.imageUrl} title={product.name} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
