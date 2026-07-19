import React from "react";
import { FaStar } from "react-icons/fa6";
import AddToCart from "../../buttons/AddToCart";

const ProductInformation = ({ data }) => {
  console.log("data", data);
  return (
    <div className="flex-1 flex flex-col px-5 gap-3">
      <p className="text-xs font-medium text-gray-500">{data.category}</p>
      <h1 className="text-2xl font-bold text-black">{data.productName}</h1>
      <div className="text-primary text-2xl font-bold">
        Rs.<span>{data.price}</span>
      </div>

      <div className="flex  gap-15 items-center">
        <div className="flex">
          {Array.from({ length: data.rating }, (_, index) => (
            <FaStar key={index} className="text-primary text-xl" />
          ))}
        </div>
        <AddToCart data={data} />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold text-gray-900">Features</p>
        <p className="text-justify font-medium text-gray-700 px-5">
          {data.feature}
        </p>
      </div>
    </div>
  );
};

export default ProductInformation;
