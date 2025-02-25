import React from "react";
import DifferentCategoryCard from "./DifferentCategoryCard";

const DifferentCategory = () => {
  return (
    <div className="w-[95%] mx-auto py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="top-selling">
          <h1 className="font-bold text-xl sm:text-2xl tracking-wider text-gray-800 relative mb-2 pb-2"> {/* Responsive font size */}
            Top Selling
            <span className="absolute bottom-0 left-0 w-[30%] h-[3px] bg-green-500"></span>
          </h1>
          <DifferentCategoryCard />
        </div>
        <div className="trending">
          <h1 className="font-bold text-xl sm:text-2xl tracking-wider text-gray-800 relative mb-2 pb-2"> {/* Responsive font size */}
            Trending Products
            <span className="absolute bottom-0 left-0 w-[30%] h-[3px] bg-green-500"></span>
          </h1>
          <DifferentCategoryCard />
        </div>
        <div className="recently-added">
          <h1 className="font-bold text-xl sm:text-2xl tracking-wider text-gray-800 relative mb-2 pb-2"> {/* Responsive font size */}
            Recently Added
            <span className="absolute bottom-0 left-0 w-[30%] h-[3px] bg-green-500"></span>
          </h1>
          <DifferentCategoryCard />
        </div>
        <div className="top-rated">
          <h1 className="font-bold text-xl sm:text-2xl tracking-wider text-gray-800 relative mb-2 pb-2"> {/* Responsive font size */}
            Top Rated
            <span className="absolute bottom-0 left-0 w-[30%] h-[3px] bg-green-500"></span>
          </h1>
          <DifferentCategoryCard />
        </div>
      </div>
    </div>
  );
};

export default DifferentCategory;