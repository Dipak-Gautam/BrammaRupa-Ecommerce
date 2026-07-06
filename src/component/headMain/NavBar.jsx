import React from "react";
import { FaCartPlus } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="flex bg-slate-100 p-4 md:px-20 justify-between text-xl md:text-3xl items-center">
      <div className="font-bold text-orange-600 hover:text-amber-700 cursor-pointer">
        Nitro Sell
      </div>
      <div>
        <FaCartPlus className="text-orange-500 cursor-pointer hover:text-orange-700 text-2xl md:text-3xl" />
      </div>
    </div>
  );
};

export default NavBar;
