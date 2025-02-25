import React from 'react';
import ProductCard from './ProductCard';

const PopularProducts = () => {
  return (
    <div className='w-[95%] mx-auto'>
      <h1 className='font-semibold text-xl tracking-wider mb-5 md:text-2xl'> {/* Responsive text size */}
        Popular Products
      </h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-x-5 gap-y-2 justify-items-center'>
        <ProductCard tag={"sale"}/>
        <ProductCard tag={"new"}/>
        <ProductCard/>
        <ProductCard tag={"-14.5%"}/>
        <ProductCard tag={"sale"}/>
        <ProductCard tag={"hot"}/>
        <ProductCard tag={"sale"}/>
        <ProductCard/>
        {/* ... more ProductCards if needed */}
      </div>
    </div>
  );
};

export default PopularProducts;