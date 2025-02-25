// DifferentCategoryCard.js
import React from "react";

const DifferentCategoryCard = () => {
  return (
    <div className="flex items-center gap-4 h-[7rem] md:h-[8rem] hover:cursor-pointer hover:scale-[1.03]">
      <div className="left w-[5rem] md:w-[6rem] lg:w-[7rem]">
        <img
          className="w-full h-full object-cover"
          src="https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)"
          alt="Product"
        />
      </div>
      <div className="right flex-grow">
        <h3 className="text-sm font-medium tracking-normal line-clamp-2">
          Aashirvaad Svasti Select Thick Tasty Pasteurized Toned Milk (500 ml)
        </h3>
        <div className="flex items-center gap-2 mt-1">
          <p className="text-green-700 font-bold text-sm">
            <span>&#8377;</span>35.00
          </p>
          <p className="line-through text-gray-500 text-xs">
            <span>&#8377;</span>37.00
          </p>
        </div>
      </div>
    </div>
  );
};

export default DifferentCategoryCard;
