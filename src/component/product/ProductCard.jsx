import React from "react";
import { FaStar } from "react-icons/fa6";
import AddToCart from "../buttons/AddToCart";
import { NavLink } from "react-router";
const data = {
  image:
    "https://tse1.mm.bing.net/th/id/OIP.NyTWHuB1hxeFLThmmg1XjQHaE8?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3",
  price: "299",
  productName: "Burger",
  rating: 5,
};

const ProductCard = () => {
  let a;
  return (
    <NavLink
      to={"/product-detail"}
      className="w-70 overflow-hidden rounded-2xl border border-gray-300 h-fit cursor-pointer bg-slate-100 hover:bg-slate-50 hover:shadow-lg shadow-black/50"
    >
      <div>
        <img src={data.image} alt={data.productName} />
      </div>
      <div className=" p-3">
        <div className="flex justify-between">
          <div className="text-xl font-semibold text-gray-900">
            {data.productName}
          </div>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar className="text-primary" />
            ))}
          </div>
        </div>
        <div className="flex justify-between">
          <div className="text-lg font-bold text-primary">
            Rs.<span>{data.price}</span>
          </div>
          <AddToCart />
        </div>
      </div>
    </NavLink>
  );
};

export default ProductCard;
