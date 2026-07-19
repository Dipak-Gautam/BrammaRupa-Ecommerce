import React from "react";
import { FaStar } from "react-icons/fa6";
import AddToCart from "../buttons/AddToCart";
import { NavLink } from "react-router";

const ProductCard = ({ data }) => {
  return (
    <NavLink
      to={"/product-detail"}
      state={{ data }}
      className="w-70 overflow-hidden rounded-2xl border border-gray-300 h-fit cursor-pointer bg-slate-100 hover:bg-slate-50 hover:shadow-lg shadow-black/50"
    >
      <div>
        <img src={data.image[0]} alt={data.productName} className="h-52" />
      </div>
      <div className=" p-3">
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-gray-900">
            {data.productName}
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: Number(data.rating) }, (_, index) => (
              <FaStar key={index} className="text-primary" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-lg font-bold text-primary">
            Rs.<span>{data.price}</span>
          </div>
          <div
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <AddToCart data={data} />
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
