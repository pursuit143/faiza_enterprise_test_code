import React, { useState, useMemo } from "react";
import Header from "../components/Header";
import { MdDeleteForever } from "react-icons/md";
import { IoMdHeart } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const CheckOut = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Aashirvaad Svasti Select Thick Tasty Pasteurized Toned Milk (500 ml)",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      price: 35.0,
      quantity: 1,
      originalPrice: 37.0,
      discount: 2.0,
    },
    {
      id: 2,
      name: "Aashirvaad Svasti Select Thick Tasty Pasteurized Toned Milk (500 ml)",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      price: 35.0,
      quantity: 2,
      originalPrice: 37.0,
      discount: 2.0,
    },
    {
      id: 3,
      name: "Aashirvaad Svasti Select Thick Tasty Pasteurized Toned Milk (500 ml)",
      imageUrl:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      price: 35.0,
      quantity: 3,
      originalPrice: 37.0,
      discount: 2.0,
    },
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [couponError, setCouponError] = useState(false);

  const validCoupons = {
    SAVE10: 3.5,
    SAVE20: 5.0,
    SAVE30: 7.0,
  };

  const handleQuantityChange = (id, change) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(1, Math.min(10, item.quantity + change)),
            }
          : item
      )
    );
  };

  const handleApplyCoupon = () => {
    if (validCoupons[couponCode]) {
      setCouponApplied(true);
      setDiscountAmount(validCoupons[couponCode]);
      setCouponError(false);
    } else {
      setCouponApplied(false);
      setDiscountAmount(0);
      setCouponError(true);
    }
  };

  const handleRemoveCoupon = () => {
    setCouponCode("");
    setCouponApplied(false);
    setDiscountAmount(0);
  };

  const handleRemoveItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    }
  };

  const calculateTotal = useMemo(() => {
    const basePrice = cartItems.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return basePrice - discountAmount;
  }, [cartItems, discountAmount]);

  const calculateSavings = useMemo(() => {
    return (
      cartItems.reduce((acc, item) => acc + item.discount * item.quantity, 0) +
      discountAmount
    );
  }, [cartItems, discountAmount]);

  const handleProceedToCheckout = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      {cartItems && cartItems.length > 0 ? (
        <div className="container w-[98%] mx-auto py-8">
          <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="md:col-span-2 bg-white p-4 rounded-lg min-h-[500px]">
              <h2 className="text-lg font-semibold mb-5">Items in Your Cart</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="grid grid-cols-1 gap-4 mb-4">
                  <div className="flex items-start gap-5">
                    <img
                      src={item.imageUrl}
                      alt="Product Image"
                      className="w-[150px] h-[180px] object-fill rounded-md border border-orange-500 p-2"
                    />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-sm font-semibold tracking-normal">
                        {item.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-md text-black font-bold">
                          &#8377;{item.price.toFixed(2)}
                        </span>
                        <span className="line-through text-gray-600">
                          &#8377;{item.originalPrice.toFixed(2)}
                        </span>
                      </div>
                      <span className="text-gray-900 -mt-1">
                        (inclusive of all taxes)
                      </span>
                      <h3 className="bg-green-300 text-green-900 w-[8rem] text-center rounded text-sm">
                        You Save &#8377;{item.discount.toFixed(2)}
                      </h3>
                      <div className="flex items-center gap-2 max-sm:flex-col max-sm:items-start">
                        <button
                          className="text-sm text-gray-700 flex items-center cursor-pointer hover:text-red-500"
                          onClick={() => handleRemoveItem(item.id)}>
                          <MdDeleteForever className="text-lg -mt-[.1rem]" />{" "}
                          Remove
                        </button>
                        <button className="text-sm text-gray-700 flex items-center cursor-pointer hover:text-green-600">
                          <IoMdHeart className="text-lg -mt-[.1rem] mr-1" />{" "}
                          Move to Wishlist
                        </button>
                      </div>

                      <div className="flex justify-end items-center gap-2 lg:-mr-25">
                        <button
                          className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                          onClick={() => handleQuantityChange(item.id, -1)}>
                          -
                        </button>
                        <input
                          value={item.quantity}
                          onChange={(e) => {
                            const newQuantity = Math.max(
                              1,
                              Math.min(10, parseInt(e.target.value))
                            );
                            if (!isNaN(newQuantity)) {
                              setCartItems((prevItems) =>
                                prevItems.map((i) =>
                                  i.id === item.id
                                    ? { ...i, quantity: newQuantity }
                                    : i
                                )
                              );
                            }
                          }}
                          className="mt-0 p-2 w-10 text-center border-0 focus:ring-0"
                          aria-label="Quantity"
                        />
                        <button
                          className="w-8 h-8 rounded-full bg-gray-300 hover:bg-gray-200 cursor-pointer flex items-center justify-center"
                          onClick={() => handleQuantityChange(item.id, 1)}>
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>MRP Total:</span>
                    <span>
                      &#8377;{" "}
                      {cartItems
                        .reduce(
                          (acc, item) =>
                            acc + item.originalPrice * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Product Discount:</span>
                    <span>
                      &#8377;{" "}
                      {cartItems
                        .reduce(
                          (acc, item) => acc + item.discount * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee:</span>
                    <span>&#8377; 0</span>
                  </div>
                  {couponApplied && (
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span className="text-green-600">Coupon Discount:</span>
                      <span className="text-green-600">
                        &#8377; {discountAmount.toFixed(2)}
                      </span>
                    </div>
                  )}
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total:</span>
                    <span>&#8377; {calculateTotal.toFixed(2)}</span>
                  </div>
                  <h3 className="float-right text-sm text-green-700">
                    You Saved &#8377; {calculateSavings.toFixed(2)}
                  </h3>
                  <button
                    onClick={handleProceedToCheckout}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-pointer">
                    Proceed to Checkout
                  </button>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">
                  Apply Coupon Code
                </h2>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="border rounded p-2 text-sm w-3/4 outline-none"
                    readOnly={couponApplied}
                  />
                  <button
                    onClick={handleApplyCoupon}
                    className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 rounded text-sm cursor-pointer ${
                      couponApplied && "hidden"
                    }`}>
                    Apply
                  </button>
                  {couponApplied && (
                    <button
                      onClick={handleRemoveCoupon}
                      className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-3 rounded text-sm cursor-pointer">
                      Remove
                    </button>
                  )}
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Coupon Discount:</span>
                    <span>- &#8377; {discountAmount.toFixed(2)}</span>
                  </div>
                )}
                {couponError && (
                  <div className="flex justify-between text-red-600">
                    <span>Invalid Coupon</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-xl flex flex-col items-center justify-center w-[95%] mx-auto h-[calc(100vh-15vh)]">
          <h1>No items in your cart.</h1>
          <Link to="/">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 w-full cursor-pointer">
              Continue Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CheckOut;
