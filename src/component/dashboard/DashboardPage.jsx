import React, { useState } from "react";
import AddProduct from "./AddProduct";
import AllProducts from "./AllProducts";
import UpdateProduct from "./UpdateProduct";
import OrderPage from "./OrderPage";

const DashboardPage = () => {
  const [screen, setScreen] = useState(0);
  return (
    <div className="h-full">
      <div className="h-full w-full md:hidden flex justify-center items-center text-xl font-bold">
        Please operate from desktop
      </div>

      {/* main logic  */}
      <div className=" h-full w-full hidden md:flex   border">
        <div className="w-[20%] p-5 bg-primary space-y-3">
          <div
            onClick={() => setScreen(0)}
            className={`text-white bg-primaryHover font-medium p-2 px-4 hover:bg-orange-400 rounded-xl cursor-pointer ${screen == 0 && "bg-orange-700 border border-white"}`}
          >
            Products
          </div>
          <div
            onClick={() => setScreen(1)}
            className={`text-white bg-primaryHover font-medium p-2 px-4 hover:bg-orange-400 rounded-xl cursor-pointer ${screen == 1 && "bg-orange-700 border border-white"}`}
          >
            Add Products
          </div>
          <div
            onClick={() => setScreen(2)}
            className={`text-white bg-primaryHover font-medium p-2 px-4 hover:bg-orange-400 rounded-xl cursor-pointer ${screen == 1 && "bg-orange-700 border border-white"}`}
          >
            Orders
          </div>
        </div>
        <div className="flex-1">
          {screen == 0 && <AllProducts />}
          {screen == 1 && <AddProduct />}
          {screen == 2 && <OrderPage />}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
