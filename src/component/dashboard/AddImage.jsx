import React, { useState } from "react";
import PlainButton from "../buttons/PlainButton";

const AddImage = ({ newProduct, setNewProduct }) => {
  const [image, setImage] = useState("");
  const insertImage = () => {
    if (image == "" || image == undefined) return;
    let tempArray = newProduct.image;
    tempArray.push(image);
    setNewProduct({ ...newProduct, image: tempArray });
    setImage("");
  };
  return (
    <div className="space-y-1">
      <div className="text-sm font-medium text-slate-500">Add Image</div>
      <div className="flex flex-wrap flex-col gap-1 ">
        {!newProduct?.image && (
          <span className="text-red-500 font-medium text-sm">
            No Image Added
          </span>
        )}
        {newProduct?.image?.map((image, index) => (
          <span
            key={index}
            className="text-xs p-1 bg-slate-300 rounded-md max-w-90 overflow-hidden"
          >
            {image}
          </span>
        ))}
      </div>
      <div>
        <input
          value={image}
          type="text"
          className="text-sm font-medium p-1 px-2 bg-slate-300 border border-slate-300 rounded-md w-80"
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <PlainButton
        title={"Add image"}
        css={"bg-green-500"}
        onClick={() => insertImage()}
      />
    </div>
  );
};

export default AddImage;
