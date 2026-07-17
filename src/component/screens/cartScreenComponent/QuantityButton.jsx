import React from "react";
import { useState } from "react";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { MdOutlineRemove } from "react-icons/md";

const QuantityButton = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex rounded-lg overflow-hidden  ">
      <div
        className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-xl text-white px-1.5 transition-colors duration-500"
        onClick={() => setQuantity(quantity + 1)}
      >
        <IoMdAdd />
      </div>
      <div className="flex justify-center items-center text-black font-semibold w-8 border-t border-b border-slate-400 bg-white">
        {quantity}
      </div>
      <div
        className="flex justify-center items-center bg-red-500 text-xl text-white px-1.5 hover:bg-red-600 transition-all duration-500"
        onClick={() => {
          quantity != 0 && setQuantity(quantity - 1);
        }}
      >
        <MdOutlineRemove />
      </div>
    </div>
  );
};

export default QuantityButton;
