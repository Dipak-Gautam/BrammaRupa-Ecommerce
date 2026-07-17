import React from "react";

const ProductDescription = ({ data }) => {
  return (
    <div className="flex flex-col my-10 space-y-3">
      <div className="text-center font-bold text-2xl text-gray-800">
        Description
      </div>
      <div className="text-gray-700 font-medium">{data.description}</div>
    </div>
  );
};

export default ProductDescription;
