import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";

const AddToCart = ({ data }) => {
  const [added, setAdded] = useState(false);
  let tempData = JSON.parse(localStorage.getItem("cart")) || [];

  const addToCart = () => {
    data.quantity = 1;
    if (tempData.length == 0) {
      tempData.push(data);
      localStorage.setItem("cart", JSON.stringify(tempData));
    } else {
      let match = tempData.filter((item) => item.id == data.id);
      if (match.length == 0) {
        tempData.push(data);
        localStorage.setItem("cart", JSON.stringify(tempData));
        return;
      }
    }
  };

  return (
    <div
      className={`flex p-2 px-3 ${added ? "bg-slate-500 hover:bg-slate-600" : "bg-primary hover:bg-primaryHover"}  text-sm items-center text-white rounded-lg cursor-pointer gap-2`}
      onClick={(e) => {
        if (!added) {
          addToCart();
          setAdded(true);
        }
      }}
    >
      <IoMdCart className="text-xl" />
      <div>Add to cart</div>
    </div>
  );
};

export default AddToCart;
