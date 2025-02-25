import React from "react";

const Card = ({ image_Url, title }) => {
  return (
    <div className="border border-orange-500 w-[8rem] ml-10 text-center p-3 rounded-md cursor-pointer hover:bg-gray-100 max-sm:mb-2 max-sm:w-[7.2rem]">
      <img
        src={image_Url}
        alt={`image_For_${title}`}
        className="w-[80%] mx-auto"
      />
      <h2 className="mt-4 text-xs font-semibold tracking-wider text-gray-700 max-sm:text-[.55rem]">
        {title}
      </h2>
    </div>
  );
};

export default Card;
