import React, { useEffect, useState } from "react";
import ImageComponent from "./productDetailComponent/ImageComponent";
import ProductInformation from "./productDetailComponent/ProductInformation";
import ProductDescription from "./productDetailComponent/ProductDescription";
import { collection, getDocs } from "firebase/firestore";
import { useLocation } from "react-router";

const ProductDetailScreen = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const data = location.state.data;

  return (
    <div className="flex flex-1 flex-col w-full h-full p-4 md:px-20">
      <div>
        <div className="flex mt-4 gap-4">
          <ImageComponent data={data} />
          <ProductInformation data={data} />
        </div>
        <ProductDescription data={data} />
      </div>
    </div>
  );
};

export default ProductDetailScreen;
