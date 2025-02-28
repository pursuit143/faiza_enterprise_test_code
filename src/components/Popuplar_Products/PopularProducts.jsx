import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([
    {
      id: "Eo9El9VIrrBvFSMtuPyRAZ",
      category: "milk",
      brand: "ashirbad",
      name: "Ashirvad Milk",
      price: "35.00",
      mrp: "37.00",
      image:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      tag: "new", // 'new', '-14.5%', 'sale', 'hot'
    },
    {
      id: "ghjkbgdbj",
      category: "milk",
      brand: "ashirbad",
      name: "Ashirvad Milk",
      price: "35.00",
      mrp: "37.00",
      image:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      tag: "sale", // 'new', '-14.5%', 'sale', 'hot'
    },
    {
      id: "789ghjk",
      category: "milk",
      brand: "ashirbad",
      name: "Ashirvad Milk",
      price: "35.00",
      mrp: "37.00",
      image:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      tag: "-14.5%", // 'new', '-14.5%', 'sale', 'hot'
    },
    {
      id: "901ghjk",
      category: "milk",
      brand: "ashirbad",
      name: "Ashirvad Milk",
      price: "35.00",
      mrp: "37.00",
      image:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      tag: "hot", // 'new', '-14.5%', 'sale', 'hot'
    },
    {
      id: "123ghjk",
      category: "milk",
      brand: "ashirbad",
      name: "Ashirvad Milk",
      price: "35.00",
      mrp: "37.00",
      image:
        "https://www.jiomart.com/images/product/original/492577703/aashirvaad-svasti-select-thick-tasty-pasteurized-toned-milk-500-ml-product-images-o492577703-p607295729-0-202401111358.jpg?im=Resize=(420,420)",
      tag: "new", // 'new', '-14.5%', 'sale', 'hot'
    },
  ]);
  return (
    <div className="w-[95%] mx-auto">
      <h1 className="font-semibold text-xl tracking-wider mb-5 md:text-2xl">
        {" "}
        {/* Responsive text size */}
        Popular Products
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-5 gap-y-2 justify-items-center">
        {products && products.length > 0 && 
        products.map((product) => (
          <Link key={product.id} to={`p/popular%products/${product.id}`}>
            <ProductCard data={product} />
          </Link>))}
      </div>
    </div>
  );
};

export default PopularProducts;
