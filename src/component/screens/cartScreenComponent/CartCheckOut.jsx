import React from "react";
import PlainButton from "../../buttons/PlainButton";
import { NavLink } from "react-router";

const calculateTotal = (calculateArray) => {
  let total = 0;
  calculateArray.map((item) => {
    total = total + item.quantity * item.price;
  });
  return total;
};

const CartCheckOut = ({ cartData, setCartData }) => {
  return (
    <div className="w-[30%]  border-l-2 border-gray-400 p-5 h-full  flex flex-col">
      <div className="text-center font-semibold text-black mb-3">Billings</div>
      <div className="flex-1">
        <div className="flex justify-between font-semibold text-gray-800 border-b border-black pb-1">
          <p className="w-30">Name</p>
          <p>quantity</p>
          <p>Price</p>
        </div>
        {cartData.map((item) => (
          <div className="flex justify-between gap-5 text-gray-700 font-medium mt-1">
            <p className="w-30">{item.productName}</p>
            <p>{item.quantity}</p>
            <p>Rs {item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-between text-black font-semibold border-t border-t-black mt-1">
        <p>Total:</p>
        <p>
          Rs. <span>{calculateTotal(cartData)}</span>
        </p>
      </div>

      <div className="p-3 flex justify-center">
        <NavLink to={"/checkout"}>
          <PlainButton title={"Checkout"} />
        </NavLink>
      </div>
    </div>
  );
};
export default CartCheckOut;
export { calculateTotal };
