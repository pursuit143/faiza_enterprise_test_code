import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

const Filters = ({ filters, setFilters }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleFilterChange = (filterGroupId, optionValue) => {
    const updatedFilters = filters.map((group) => {
      if (group.id === filterGroupId) {
        const updatedOptions = group.options.map((option) => {
          if (option.value === optionValue) {
            return { ...option, checked: !option.checked };
          }
          return option;
        });
        return { ...group, options: updatedOptions };
      }
      return group;
    });
    setFilters(updatedFilters);
  };

  const toggleMobileFilters = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile Trigger Button */}
      <button
        className="sm:hidden fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-md z-50"
        onClick={toggleMobileFilters}
      >
        Filters
      </button>

      {/* Mobile Filters Overlay */}
      <aside
        className={`fixed top-0 left-0 w-full h-full bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        } sm:hidden`}
      >
        <div className="p-4 relative">
          <button
            className="absolute top-4 right-4 text-gray-600"
            onClick={toggleMobileFilters}
          >
            <FaTimes />
          </button>
          <h1 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-3">
            Filters
          </h1>

          <div className="space-y-6">
            {filters.map((filterGroup) => (
              <div
                key={filterGroup.id}
                className={
                  filterGroup.id !== filters[0].id
                    ? "border-t border-gray-400 pt-3"
                    : ""
                }
              >
                <h2 className="text-md font-semibold mb-3 text-gray-700">
                  {filterGroup.title}
                </h2>
                <div className="space-y-2">
                  {filterGroup.options.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center text-sm text-gray-600 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                        value={option.value}
                        checked={option.checked}
                        onChange={() =>
                          handleFilterChange(filterGroup.id, option.value)
                        }
                      />
                      <span>{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Desktop/Tablet Filters */}
      <aside className="sm:w-50 p-4 bg-white rounded-xl shadow-md border border-gray-200 mt-5 hidden sm:block">
        <h1 className="text-2xl font-bold mb-3 text-gray-800 border-b border-gray-400 pb-3">
          Filters
        </h1>

        <div className="space-y-6">
          {filters.map((filterGroup) => (
            <div
              key={filterGroup.id}
              className={
                filterGroup.id !== filters[0].id
                  ? "border-t border-gray-400 pt-3"
                  : ""
              }
            >
              <h2 className="text-md font-semibold mb-3 text-gray-700">
                {filterGroup.title}
              </h2>
              <div className="space-y-2">
                {filterGroup.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center text-sm text-gray-600 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-blue-600 rounded focus:ring-blue-500 mr-2 cursor-pointer"
                      value={option.value}
                      checked={option.checked}
                      onChange={() =>
                        handleFilterChange(filterGroup.id, option.value)
                      }
                    />
                    <span>{option.label}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Filters;