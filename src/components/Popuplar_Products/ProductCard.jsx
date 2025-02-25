import React from "react";

const ProductCard = ({ tag }) => {
  const getTagStyle = (tag) => {
    switch (tag) {
      case "sale":
        return "bg-red-600 text-white";
      case "hot":
        return "bg-yellow-500 text-gray-800";
      case "new":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="relative border border-gray-200 w-[12rem] p-3 rounded-lg shadow-sm transition hover:shadow-md mb-5 cursor-pointer hover:scale-[1.04] max-sm:w-[11rem] overflow-hidden">
      {tag && (
        <div
          className={`absolute text-xs w-[3rem] px-1 py-1 text-center rounded-br-2xl rounded-tl-lg top-0 left-[-.1rem] ${getTagStyle(tag)}`}
        >
          <h1 className="capitalize tracking-wider">{tag}</h1>
        </div>
      )}

      <div className="w-[80%] mx-auto p-2">
        <img
          className="mb-2 w-full"
          src="https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)"
          alt="Product"
        />
      </div>
      <p className="text-sm text-gray-500">Milk</p>
      <h3 className="font-semibold text-sm mb-1 line-clamp-2">
        Seeds of Change Organic Quinoa
      </h3>
      <p className="text-xs text-gray-500">By Ashirvaad</p>
      <div className="flex items-center justify-between mt-2">
        <div>
          <h4 className="font-semibold text-lg text-green-700">
            <span>&#8377;</span>135.00
          </h4>
          <h4 className="text-sm line-through text-gray-400">
            <span>&#8377;</span>37.00
          </h4>
        </div>
        <button className="py-2 px-3 bg-emerald-200 text-green-900 font-bold rounded-lg text-xs hover:bg-emerald-400 transition cursor-pointer max-sm:text-[.6rem] max-sm:mt-5">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;