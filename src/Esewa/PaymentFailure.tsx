import React from "react";
import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router";

const PaymentFailure = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex h-[100vh] w-[100vw] justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: "url(tempBack.png)",
      }}
    >
      <div className="  text-2xl border rounded-xl shadow-xl shadow-black/60 overflow-hidden bg-white">
        <IoCloseCircle className="text-red-500 h-40 w-40 mx-auto" />
        <p className="text-red-500 text-4xl text-center"> Payment Fail</p>
        <div className="bg-white px-40 my-4">
          <div
            className="text-base p-2 px-3 bg-red-500  text-center font-medium text-white rounded-lg hover:bg-red-600 cursor-pointer"
            onClick={() => navigate("/")}
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentFailure;
