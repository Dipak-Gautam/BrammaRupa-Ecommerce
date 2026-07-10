import React from "react";
import { FaStar } from "react-icons/fa6";
import AddToCart from "../../buttons/AddToCart";

const ProductInformation = () => {
  return (
    <div className="flex-1 flex flex-col px-5 gap-3">
      <p className="text-xs font-medium text-gray-500">food</p>
      <h1 className="text-2xl font-bold text-black">Cheese Burger</h1>
      <div className="text-primary text-2xl font-bold">
        Rs.<span>199</span>
      </div>

      <div className="flex  gap-15 items-center">
        <div className="flex">
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar className="text-primary text-xl" />
          ))}
        </div>
        <AddToCart />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold text-gray-900">Features</p>
        <p className="text-justify font-medium text-gray-700 px-5">
          Model: MSI VECTOR 16 HX AI A2XWHG <br /> Processor: Intel Core Ultra 9
          275HX <br /> PROCESSOR RAM: 16GB DDR5-5600 MHz <br /> RAM Storage: 1TB
          NVMe PCIe Gen 4 SSD (M.2) Display: 16″ QHD+ (2560 x 1600) IPS,240HZ
          DISPLAY Graphic: NVIDIA GeForce RTX 5070TI with 16GB GDDR7 Warranty: 2
          Year HARDWARE Warranty/LIFETIME SOFTWARE WARRANTY
        </p>
      </div>
    </div>
  );
};

export default ProductInformation;
