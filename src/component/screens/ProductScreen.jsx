import React, { useEffect, useState } from "react";
import ProductCard from "../product/ProductCard";
import { useLocation } from "react-router";
import { db } from "../../fireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ProductScreen = () => {
  const location = useLocation();
  const category = location.state.items.category;
  const [productsData, setProductData] = useState([]);

  const readData = async () => {
    const queryData = query(
      collection(db, "Product"),
      where("category", "==", category),
    );
    const querySnapshot = await getDocs(queryData);
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProductData(productList);
  };

  useEffect(() => {
    readData();
  }, []);
  console.log("products data", productsData);
  return (
    <div className="flex flex-1 flex-col w-full h-full ">
      <div className="text-2xl font-bold text-center my-5">Categories</div>
      {productsData == undefined && (
        <div className="flex-1 flex flex-col justify-center items-center">
          <div className="text-2xl font-bold text-black">Loading ......</div>
          <p className="text-slate-700 font-semibold text-lg">Please Wait</p>
        </div>
      )}
      {productsData !== undefined && (
        <div className="p-4 md:px-20 flex-1 flex flex-wrap gap-7">
          {productsData.map((item) => (
            <ProductCard data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
