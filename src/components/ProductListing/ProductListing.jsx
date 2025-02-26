import React, { useState } from "react";
import AdCard from "./AdCard";
import Filters from "./Filters";
import ProductListComponent from "./ProductListComponent";

const ProductListing = () => {
  const [filters, setFilters] = useState([
    {
      id: "brand",
      title: "Brand",
      options: [
        { value: "brandA", label: "Brand A", checked: false },
        { value: "brandB", label: "Brand B", checked: true },
        { value: "brandC", label: "Brand C", checked: false },
      ],
    },
    {
      id: "category",
      title: "Category",
      options: [
        { value: "tech", label: "Tech", checked: false },
        { value: "apparel", label: "Apparel", checked: true },
        { value: "home", label: "Home", checked: false },
      ],
    },
    {
      id: "price",
      title: "Price",
      options: [
        { value: "0-50", label: "0 - 50", checked: false },
        { value: "50-100", label: "50 - 100", checked: false },
        { value: "100+", label: "100+", checked: false },
      ],
    },
  ]);
  return (
    <div className="w-[95%] mx-auto my-5">
      <div>
        <AdCard />
        <div className="flex">
          <div className="max-sm:hidden">
            <Filters filters={filters} setFilters={setFilters} />
          </div>
          <div>
            <ProductListComponent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
