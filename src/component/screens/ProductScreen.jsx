import React from "react";
import ProductCard from "../product/ProductCard";

const ProductScreen = () => {
  return (
    <div className="flex flex-1 flex-col w-full h-full ">
      <div className="text-2xl font-bold text-center my-5">Categories</div>
      <div className="p-4 md:px-20 flex-1 flex flex-wrap">
        <ProductCard />
      </div>
    </div>
  );
};

export default ProductScreen;
