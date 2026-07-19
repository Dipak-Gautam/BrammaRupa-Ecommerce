import React from "react";
import { FaStar } from "react-icons/fa6";
import QuantityButton from "./QuantityButton";

const CartItem = ({ cartData, setCartData, itemData }) => {
  return (
    <div className="flex rounded-xl overflow-hidden border  border-slate-200 cursor-pointer bg-slate-100 hover:bg-white transition-all duration-500 hover:shadow-md shadow-black/50">
      <div>
        <img className="h-24 w-32" src={itemData.image[0]} alt="cart Item" />
      </div>
      <div className=" px-5 flex flex-col justify-center w-full gap-2">
        <div className="flex justify-between w-full items-center">
          <p className="text-xl font-bold text-black">{itemData.productName}</p>
          <div className="flex gap-0.5">
            {Array.from({ length: Number(itemData.rating) }, (_, index) => (
              <FaStar key={index} className="text-primary" />
            ))}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <p className="text-primary text-2xl font-bold">
            Rs. <span>{itemData.price}</span>
          </p>
          <QuantityButton
            cartData={cartData}
            setCartData={setCartData}
            itemData={itemData}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
