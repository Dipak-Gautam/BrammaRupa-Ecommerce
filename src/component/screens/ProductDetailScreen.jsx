import React from "react";
import ImageComponent from "./productDetailComponent/ImageComponent";
import ProductInformation from "./productDetailComponent/ProductInformation";
import ProductDescription from "./productDetailComponent/ProductDescription";

const ProductDetailScreen = () => {
  return (
    <div className="flex flex-1 flex-col w-full h-full p-4 md:px-20">
      <div>
        <div className="flex mt-4 gap-4">
          <ImageComponent />
          <ProductInformation />
        </div>
        <ProductDescription />
      </div>
    </div>
  );
};

export default ProductDetailScreen;
