import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuArrowUpDown } from "react-icons/lu";
import { FaFilter } from "react-icons/fa6";

const SortBy = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Popularity");
  const dropdownRef = useRef(null);

  const options = ["Popularity", "Price: Low to High", "Price: High to Low", "Newest"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleMobileFilters = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <div className="mt-5 max-sm:flex max-sm:gap-5">
      <div
        ref={dropdownRef}
        className="relative inline-block text-left w-full md:w-auto md:max-w-[30%] md:float-right"
      >
        <div>
          <button
            type="button"
            className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer max-sm:w-[6.5rem] max-sm:rounded-full"
            id="menu-button"
            aria-expanded={isOpen}
            aria-haspopup="true"
            onClick={toggleDropdown}
          >
            <span className="flex items-center">
                Sort by <h1 className="font-bold ml-1 max-sm:hidden">{`: ${selectedOption}`}</h1>
            </span>
            <IoIosArrowDown className="h-5 w-5 max-sm:hidden" aria-hidden="true" />
            <LuArrowUpDown className="hidden h-5 w-5 max-sm:block" aria-hidden="true"/>
          </button>
        </div>

        {isOpen && (
          <div
            className="origin-top-right absolute right--10 mt-2 w-full md:w-56 rounded-md shadow-lg bg-white focus:outline-none z-10 max-sm:w-[10rem]"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-1" role="none">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                  role="menuitem"
                  tabIndex="-1"
                  id={`menu-item-${option.toLowerCase().replace(/ /g, "-")}`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      <div>
          <button
            type="button"
            className="hidden max-sm:inline-flex justify-between w-[5rem] rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none cursor-pointer max-sm:w-[6rem] max-sm:rounded-full"
            id="menu-button"
            aria-haspopup="true"
          >
            <span className="flex items-center">
                Filters
            </span>
            <FaFilter className="hidden h-4 w-4 max-sm:block mt-[.15rem]" aria-hidden="true"/>
          </button>
        </div>
    </div>
  );
};

export default SortBy;