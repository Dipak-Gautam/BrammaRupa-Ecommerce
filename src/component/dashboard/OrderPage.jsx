import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../fireBaseConfig";
import OrderCard from "./OrderCard";

const OrderPage = () => {
  const [order, setOrder] = useState([]);
  const readData = async () => {
    const queryData = query(collection(db, "order"));
    const querySnapshot = await getDocs(queryData);
    const orderList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("order list", orderList);
    setOrder(orderList);
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <div className=" flex flex-col flex-1 h-full w-full">
      <div className="text-2xl font-bold text-black py-3 text-center">
        Orders
      </div>
      <div className="flex flex-col gap-3 px-10">
        {order.map((item, index) => (
          <OrderCard key={index} data={item.kot} />
        ))}
      </div>
    </div>
  );
};

export default OrderPage;
