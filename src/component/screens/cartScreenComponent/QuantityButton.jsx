import React from "react";
import { useState } from "react";
import { IoIosRemove, IoMdAdd } from "react-icons/io";
import { MdOutlineRemove } from "react-icons/md";

const QuantityButton = ({ cartData, setCartData, itemData }) => {
  const deleteCart = () => {
    let deleted = cartData.filter((item) => item.id !== itemData.id);
    localStorage.setItem("cart", JSON.stringify(deleted));
    setCartData(deleted);
  };

  const addQuantity = () => {
    itemData.quantity = itemData.quantity + 1;
    let updated = cartData.map((item) => (item == itemData ? itemData : item));
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartData(updated);
  };
  const removeQuantity = () => {
    if (itemData.quantity == 1) {
      deleteCart();
      return;
    }
    itemData.quantity = itemData.quantity - 1;
    let updated = cartData.map((item) => (item == itemData ? itemData : item));
    localStorage.setItem("cart", JSON.stringify(updated));
    setCartData(updated);
  };

  return (
    <div className="flex rounded-lg overflow-hidden  ">
      <div
        className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-xl text-white px-1.5 transition-colors duration-500"
        onClick={() => addQuantity()}
      >
        <IoMdAdd />
      </div>
      <div className="flex justify-center items-center text-black font-semibold w-8 border-t border-b border-slate-400 bg-white">
        {itemData.quantity}
      </div>
      <div
        className="flex justify-center items-center bg-red-500 text-xl text-white px-1.5 hover:bg-red-600 transition-all duration-500"
        onClick={() => removeQuantity()}
      >
        <MdOutlineRemove />
      </div>
    </div>
  );
};

export default QuantityButton;
