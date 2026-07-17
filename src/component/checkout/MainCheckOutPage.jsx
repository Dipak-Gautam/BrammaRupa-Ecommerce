import React, { useState } from "react";
import UserDetail from "./UserDetail";
import CheckoutAside from "./CheckoutAside";

const MainCheckOutPage = () => {
  const [userDetail, setUserDetail] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    city: "",
    street: "",
    addressDescription: "",
    county: "",
  });
  return (
    <div className="flex flex-col flex-1 h-full w-full p-4 md:px-20">
      <div className="text-center text-2xl font-bold my-2">Checkout</div>
      <div className="flex gap-2 w-full h-full">
        <UserDetail userDetail={userDetail} setUserDetail={setUserDetail} />
        <CheckoutAside />
      </div>
    </div>
  );
};

export default MainCheckOutPage;
