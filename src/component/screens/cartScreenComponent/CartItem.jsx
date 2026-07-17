import React from "react";
import { FaStar } from "react-icons/fa6";
import QuantityButton from "./QuantityButton";

const CartItem = () => {
  return (
    <div className="flex rounded-xl overflow-hidden border  border-slate-200 cursor-pointer bg-slate-100 hover:bg-white transition-all duration-500 hover:shadow-md shadow-black/50">
      <div>
        <img
          className="h-24 w-32"
          src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
          alt="cart Item"
        />
      </div>
      <div className=" px-5 flex flex-col justify-center w-full gap-2">
        <div className="flex justify-between w-full items-center">
          <p className="text-xl font-bold text-black">Burger</p>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }, (_, index) => (
              <FaStar key={index} className="text-primary" />
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-primary text-2xl font-bold">
            Rs. <span>199</span>
          </p>
          <QuantityButton />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
