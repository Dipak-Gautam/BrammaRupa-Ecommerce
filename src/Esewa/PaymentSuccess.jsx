import { addDoc, collection } from "firebase/firestore";
import React from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router";
import { db } from "../fireBaseConfig";

const PaymentSuccess = () => {
  const navigate = useNavigate();
  const cartData = JSON.parse(localStorage.getItem("cart")) || [];
  const orderData = JSON.parse(localStorage.getItem("order"));
  const updatedCart = [];
  let newCart = cartData.map((item) =>
    updatedCart.push({
      name: item.productName,
      quantity: item.quantity,
      price: item.price,
    }),
  );

  const Process = async () => {
    const kot = { orderData: orderData, cartData: updatedCart };
    const putData = JSON.stringify(kot);
    const dataSend = { kot: putData };
    const docRef = await addDoc(collection(db, "order"), dataSend);
    localStorage.removeItem("cart");
    localStorage.removeItem("order");
    navigate("/");
  };

  return (
    <div
      className="flex h-[100vh] w-[100vw] justify-center items-center bg-cover bg-no-repeat "
      style={{
        backgroundImage: "url(tempBack.png)",
      }}
    >
      <div className="  text-2xl border rounded-xl shadow-xl shadow-black/60 overflow-hidden bg-white">
        <IoCheckmarkDoneCircleSharp className="h-40 w-40 mx-auto text-green-500" />
        <div className="text-3xl font-bold text-green-500 text-center">
          Payment Successful
        </div>
        <div className="bg-white px-40 my-4">
          <div
            className="text-base p-2 px-3 bg-green-500  text-center font-medium text-white rounded-lg hover:bg-green-600 cursor-pointer"
            onClick={() => Process()}
          >
            Continue
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
