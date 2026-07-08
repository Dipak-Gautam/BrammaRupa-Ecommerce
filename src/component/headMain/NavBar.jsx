import React from "react";
import { FaCartPlus } from "react-icons/fa";
import { NavLink } from "react-router";

const NavBar = () => {
  return (
    <div className="flex bg-slate-100 p-4 md:px-20 justify-between text-xl md:text-3xl items-center">
      <NavLink
        to={"/"}
        className="font-bold text-orange-600 hover:text-amber-700 cursor-pointer"
      >
        Nitro Sell
      </NavLink>
      <NavLink to={"/cart"}>
        <FaCartPlus className="text-orange-500 cursor-pointer hover:text-orange-700 text-2xl md:text-3xl" />
      </NavLink>
    </div>
  );
};

export default NavBar;
