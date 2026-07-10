import React from "react";
import { IoMdCart } from "react-icons/io";

const AddToCart = () => {
  return (
    <div className="flex p-2 px-3 bg-primary hover:bg-primaryHover text-sm items-center text-white rounded-lg cursor-pointer gap-2">
      <IoMdCart className="text-xl" />
      <div>Add to cart</div>
    </div>
  );
};

export default AddToCart;
