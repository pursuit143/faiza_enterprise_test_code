import React from "react";
import SortBy from "./SortBy";
import ProductCard from "../Popuplar_Products/ProductCard"
const ProductListComponent = () => {
  return (
    <div className="flex flex-col gap-5 ml-4 max-sm:ml-0">
      <SortBy />
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 2xl:grid-cols-7 gap-x-5 gap-y-2 justify-items-center'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
      </div>
    </div>
  );
};

export default ProductListComponent;
