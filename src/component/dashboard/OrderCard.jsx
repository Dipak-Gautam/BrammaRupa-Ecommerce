import React from "react";

const OrderCard = ({ data }) => {
  const actual = JSON.parse(data);
  console.log("actual", actual);
  return (
    <div className="p-3 rounded-xl text-slate-600 font-medium text-sm bg-slate-200 border  text-wrap flex flex-wrap flex-col">
      <div className="flex gap-2">
        <span>{actual.orderData.firstName}</span>
        <span>{actual.orderData.lastName}</span>
        <span>{actual.orderData.city}</span>
        <span>{actual.orderData.email}</span>
        <span>{actual.orderData.contactNumber}</span>
        <span>{actual.orderData.addressDescription}</span>
      </div>
      <div>
        <div className=" space-x-3 font-semibold">
          <span className="w-20">Name</span>
          <span className="w-20">Quantity</span>
          <span className="w-20">Price</span>
        </div>
        {actual.cartData.map((item) => (
          <div className=" space-x-3">
            <span className="w-20">{item.name}</span>
            <span className="w-20">{item.quantity}</span>
            <span className="w-20">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderCard;
