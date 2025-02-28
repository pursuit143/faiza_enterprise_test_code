import React, { useState } from "react";
import ProductImage from "./ProductImage";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineShoppingBasket } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { TbTruckReturn } from "react-icons/tb";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const ProductDetails = () => {
  const productDetails = [
    {
      id: 1,
      brand: "ITC",
      name: "fresho! Capsicum - Green (Loose), 1 kg",
      description:
        "Ashirvaad Milk is a thick pasteurized milk with a taste of creamy, tart, and slightly tangy.",
      largeImageUrl:
        "https://www.bigbasket.com/media/uploads/p/l/10000067_26-fresho-capsicum-green.jpg",
      smallImageUrl: [
        "https://www.bigbasket.com/media/uploads/p/l/10000067-6_3-fresho-capsicum-green.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000067-5_4-fresho-capsicum-green.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000067-4_5-fresho-capsicum-green.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000067-6_3-fresho-capsicum-green.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000067-5_4-fresho-capsicum-green.jpg",
        "https://www.bigbasket.com/media/uploads/p/l/10000067-4_5-fresho-capsicum-green.jpg",
      ],
      variants: [
        {
          id: "1kg",
          label: "1 kg",
          price: "35.00",
          mrp: "40.00",
          available: 100,
        },
        {
          id: "500g",
          label: "500 g",
          price: "22.00",
          mrp: "25.00",
          available: 100,
        },
        {
          id: "250g",
          label: "250 g",
          price: "12.00",
          mrp: "15.00",
          available: 100,
        },
      ],
    },
  ];

  const navigate = useNavigate();
  const [selectedVariant, setSelectedVariant] = useState(
    productDetails[0].variants[0]
  );
  const [quantity, setQuantity] = useState(1);
  const [isDeliveryAvailable, setIsDeliveryAvailable] = useState(true);

  const handleVariantChange = (variant) => {
    setSelectedVariant(variant);
  };

  const handleQuantityChange = (change) => {
    setQuantity((prevQuantity) =>
      Math.max(1, Math.min(10, prevQuantity + change))
    );
  };

  const discountPercentage = parseFloat(
    ((parseFloat(selectedVariant.mrp) - parseFloat(selectedVariant.price)) *
      100) /
      parseFloat(selectedVariant.mrp)
  ).toFixed(2);

  return (
    <div className="w-[98%] mx-auto">
      <div className="w-[100%] mx-auto mt-2 flex flex-col md:flex-row">
        <ProductImage productDetails={productDetails} />
        {/* Product Details */}
        <div className="md:w-1/2 p-4">
          <Link to={""}>
            <p className="text-sm text-gray-400 tracking-wider hover:underline hover:text-green-400">
              {productDetails[0].brand}
            </p>
          </Link>
          <h2 className="text-xl font-semibold mb-1 capitalize tracking-wider">
            {productDetails[0].name}
          </h2>
          <p className="text-gray-600 mb-2">{productDetails[0].description}</p>
          <p className="text-md font-medium mb-1 text-green-800">
            Price: &#8377;{selectedVariant.price}
            <span className="bg-emerald-200 ml-3 px-1.5 rounded">
              {discountPercentage}%
            </span>
          </p>
          <p className="text-sm font-medium mb-1 text-gray-400 tracking-wide">
            MRP:{" "}
            <span className="line-through">&#8377;{selectedVariant.mrp}</span>
            <span className="text-gray-600"> (inclusive all taxes)</span>
          </p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Quantity:
            </label>
            <div className="flex items-center rounded-md p-1">
              <button
                className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                onClick={() => handleQuantityChange(-1)}>
                -
              </button>
              <input
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-0 p-2 w-10 text-center border-0 focus:ring-0"
                aria-label="Quantity"
              />
              <button
                className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                onClick={() => handleQuantityChange(1)}>
                +
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center max-sm:flex-col">
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2"
            onClick={()=>navigate('/checkout/cart')}
            >
              <MdOutlineShoppingBasket size={20} />
              Add to Cart
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-md cursor-pointer w-full sm:w-auto flex items-center justify-center gap-2 ">
              <FaBookmark size={18} />
              Save for later
            </button>
          </div>
          {/* Variant Selection */}
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Select Variant</h3>
            <div className="flex flex-wrap gap-2">
              {productDetails[0].variants.map((variant) => (
                <button
                  key={variant.id}
                  className={`border rounded-md px-3 py-1 cursor-pointer ${
                    selectedVariant.id === variant.id
                      ? "bg-blue-100 border-blue-500"
                      : "border-gray-300 hover:border-gray-400"
                  }`}
                  onClick={() => handleVariantChange(variant)}>
                  {variant.label}
                </button>
              ))}
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-1">
              Additional Information
            </h3>
            <ul className="list-disc pl-6">
              <li>
                <p className="text-gray-600">
                  Availability:{" "}
                  {selectedVariant.available > 0 ? "In Stock" : "Out of Stock"}
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  Delivery: Standard Delivery (2-3 hours)
                </p>
              </li>
              <li>
                <p className="text-gray-600">
                  COD: Available on order above 499
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* shipping & delivery, return policy, offer & reward */}
      <div className="border border-green-700 rounded-lg p-2 mb-2 bg-green-50 grid grid-cols-2 max-sm:grid-cols-1">
        {/* Shipping & Delivery */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <FaShippingFast className="text-xl sm:text-2xl md:text-3xl" />{" "}
            {/* Icon size adjusts based on screen size */}
            Shipping & Delivery
          </h2>
          <div className="flex items-center mb-2">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="border border-green-600 outline-none p-2 rounded-l-md w-[10rem] bg-white px-5 py-2 text-sm"
            />
            <button className="bg-green-800 hover:bg-green-900 text-white font-semibold py-2 px-4 rounded-r-md cursor-pointer w-[5rem] h-[2.35rem] flex items-center justify-center gap-2 outline-none border-none">
              Check
            </button>
          </div>
          {isDeliveryAvailable && (
            <p className="text-sm text-green-700 tracking-wider mb-1">
              Delivery Available within 3 hours
            </p>
          )}
          <div className="grid grid-cols-1 gap-y-1">
            <p className="text-black flex items-center gap-1 max-sm:text-sm">
              {/* Inline SVG Arrow */}
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Standard Delivery (2-3 hours)
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Saturday delivery (7 AM-9 PM) - Available on weekends
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Free delivery on prepaid orders above 999
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Cash on delivery (COD) available on orders above 499
            </p>
          </div>
        </div>

        {/* Return Policy */}
        <div className="mb-4">
          <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <TbTruckReturn className="text-xl sm:text-2xl md:text-3xl" />{" "}
            {/* Icon size adjusts based on screen size */}
            Return Policy
          </h2>
          <div className="grid grid-cols-1 gap-y-1">
            <p className="text-black flex items-center gap-1 max-sm:text-sm">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Groceries are generally non-returnable.
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Returns are only accepted for damaged or defective products.
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Fresh produce, dairy, and frozen goods cannot be returned.
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Please report any issues within 24 hours of delivery for a
              resolution.
            </p>
            <p className="text-black flex items-center gap-1 max-sm:text-sm max-sm:items-start">
              <svg
                className="text-sm sm:text-base w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="green">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
              Refunds or replacements will be processed after product
              inspection.
            </p>
          </div>
        </div>
      </div>

      {/* description */}
      <div className="mb-4 border border-gray-400 rounded p-3">
        <h2 className="text-lg font-semibold mb-2 flex items-center gap-2">
          Description
        </h2>
        <p className="text-sm sm:text-base mb-2 text-pretty">
        Green capsicum, known as bell pepper, is a versatile vegetable widely used in Indian cuisine. Its crisp texture and mild, slightly bitter flavour make it a favourite in curries, stir-fries, and salads across the country. In dishes like Paneer Tikka or Mixed Vegetable Sabzi, diced capsicum adds colour and enhances the overall taste. It is also a key ingredient in Indo-Chinese dishes like chilli paneer or vegetable Manchurian, where its crunchiness complements spicy sauces. Grown in various regions of India, green capsicum's popularity highlights its integration into both traditional and modern Indian cooking, prized for its culinary adaptability.
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
