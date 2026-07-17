import React from "react";

const ProductInput = ({
  title,
  type,
  error,
  errorMessage,
  newProduct,
  setNewProduct,
  field,
}) => {
  return (
    <div className="space-y-0.5 w-fit p-2">
      <div className="text-slate-600 text-sm font-medium px-1">{title}</div>
      <input
        value={newProduct[field]}
        type={type}
        className="bg-slate-200 border border-slate-300 w-80 p-2 text-black rounded-lg "
        onChange={(e) =>
          setNewProduct({ ...newProduct, [field]: e.target.value })
        }
      />
      {error && (
        <div className="text-sm  italic text-red-500">{errorMessage}</div>
      )}
    </div>
  );
};

export default ProductInput;
