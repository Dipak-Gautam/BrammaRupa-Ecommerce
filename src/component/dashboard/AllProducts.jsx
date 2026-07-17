import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../fireBaseConfig";
import EditProductCard from "./EditProductCard";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  const readData = async () => {
    const queryData = query(collection(db, "Product"));
    const querySnapshot = await getDocs(queryData);
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setProducts(productList);
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <div className="flex flex-col flex-1 h-full w-full">
      <div className="text-2xl font-bold text-black text-center">
        All Products
      </div>
      <div className="flex flex-col gap-5 flex-1 p-4">
        {products.length == 0 && (
          <span className="h-full flex justify-center items-center text-2xl font-bold text-slate-500">
            Loading....
          </span>
        )}
        {products.map((item) => (
          <EditProductCard key={item.productName} data={item} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
