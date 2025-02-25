import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-300">
      <div className="main-container w-[95%] mx-auto flex justify-between items-center py-4">
        {/* Left Column */}
        <div className="left-col w-[25%] max-sm:w-full max-sm:flex max-sm:flex-col justify-center items-center">
          <h1 className="font-bold text-2xl tracking-wider">Faiza</h1>
          <p className="font-semibold text-sm tracking-[.3rem] text-gray-600">
            Enterprise
          </p>
        </div>

        {/* Middle Column: Categories and Search */}
        <div className="mid-col flex justify-between items-center gap-3 w-[40%] max-sm:hidden">
          <div className="flex items-center gap-2 text-sm">
            <h2 className="font-semibold text-gray-700 cursor-pointer">All Categories</h2>
            <FaAngleDown size={14} />
          </div>
          <div className="flex items-center gap-2 w-full border-b border-gray-300">
            <input
              type="text"
              placeholder="Search for items..."
              className="outline-none w-full py-1"
            />
            <CiSearch size={20} className="text-gray-500" />
          </div>
        </div>

        {/* Right Column: Cart, Wishlist, and Log In */}
        <div className="right-col flex justify-end items-center gap-6 w-[35%] max-sm:hidden">
          {/* Cart Icon */}
          <div className="flex justify-center items-center relative cursor-pointer">
            <div className="absolute top-[-8px] right-[-8px]">
              <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white p-[0.2rem]">
                3
              </p>
            </div>
            <FaShoppingCart size={22} />
          </div>

          {/* Wishlist Icon */}
          <div className="flex justify-center items-center relative cursor-pointer">
            <div className="absolute top-[-8px] right-[-8px]">
              <p className="flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white p-[0.2rem]">
                3
              </p>
            </div>
            <FaRegHeart size={22} />
          </div>

          {/* Log In Button */}
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded-md cursor-pointer transition duration-200 ease-in-out">
            Log In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
