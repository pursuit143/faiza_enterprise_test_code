import React from "react";
import { EmblaCarousel } from "../components/Carousel/CarouselComponent";
import ProductCarousel from "../components/ProductCart/ProductCarousel";
import PopularProducts from "../components/Popuplar_Products/PopularProducts";
import DifferentCategory from "../components/DifferentCategories/DifferentCategory";
export const Home = () => {
  return (
    <div className="mt-6">
      <EmblaCarousel />
      <ProductCarousel title={"Shop by Categories"} />
      <PopularProducts/>
      <DifferentCategory/>
    </div>
  );
};
