import React, { useState } from "react";
import CartCheckOut from "./cartScreenComponent/CartCheckOut";
import CartItem from "./cartScreenComponent/CartItem";

const CartScreen = () => {
  const [cartData, setCartData] = useState(
    JSON.parse(localStorage.getItem("cart")) || [],
  );
  console.log("cart data", cartData);
  return (
    <div className="flex flex-1 flex-col w-full h-full p-4 md:px-20">
      <div className="text-center my-3 text-2xl font-bold ">Shopping Cart</div>
      <div className="flex-1 flex gap-3">
        <div className="overflow-y-auto flex flex-col gap-3 flex-1">
          {cartData.map((item) => (
            <CartItem
              key={item.id}
              cartData={cartData}
              setCartData={setCartData}
              itemData={item}
            />
          ))}
        </div>
        <CartCheckOut cartData={cartData} setCartData={setCartData} />
      </div>
    </div>
  );
};

export default CartScreen;
