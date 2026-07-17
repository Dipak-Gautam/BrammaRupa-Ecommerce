import React, { useState } from "react";
import ProductInput from "./ProductInput";
import TextAreaInput from "./TextAreaInput";
import AddImage from "./AddImage";
import PlainButton from "../buttons/PlainButton";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../fireBaseConfig";
import { IoArrowBackOutline } from "react-icons/io5";

const UpdateProduct = ({ productData, show, setShow }) => {
  const [newProduct, setNewProduct] = useState(productData);
  const [error, setError] = useState(false);
  const updateProductDB = async () => {
    if (
      newProduct.productName == "" ||
      newProduct.price == "0" ||
      newProduct.feature == "" ||
      newProduct.description == "" ||
      newProduct.image.length == 0
    ) {
      setError(true);
      return;
    } else {
      try {
        const docRef = doc(db, "Product", newProduct.id);
        const updateProduct = await updateDoc(docRef, newProduct);
        alert("Product updated sucessfully");
        setError(false);
        setShow(false);
        window.location.reload();
      } catch (error) {
        console.log("error updating data", error);
        alert("product cannot be updated");
      }
    }
  };

  return (
    <div
      className={` ${
        show ? "flex flex-col" : "hidden"
      } flex-1  overflow-y-auto h-full w-full border   fixed inset-0 bg-white  items-center py-7`}
    >
      <div
        className="absolute top-2 left-2 bg-primary p-1 rounded-xl text-xl text-white px-2"
        onClick={() => setShow(false)}
      >
        <IoArrowBackOutline />
      </div>
      <div className="text-2xl font-bold text-center">Update Product</div>
      <div className="flex gap-15">
        <ProductInput
          title={"Product Name"}
          error={error}
          errorMessage={"please enter product name"}
          type={"string"}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          field={"productName"}
        />
        <ProductInput
          title={"Product Price"}
          error={error}
          errorMessage={"please enter product price"}
          type={"string"}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          field={"price"}
        />
      </div>
      <div className="flex gap-15 items-center">
        <ProductInput
          title={"Product Rating"}
          error={error}
          errorMessage={"please enter product rating"}
          type={"number"}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          field={"rating"}
        />
        <div>
          <p className="text-slate-500 font-medium text-sm">Category</p>
          <select
            className="p-2 border border-slate-300 bg-slate-300 w-80 rounded-lg"
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          >
            <option value="food">Food</option>
            <option value="tech">Tech</option>
            <option value="sneakers">Sneakers</option>
          </select>
        </div>
      </div>
      <div className="flex gap-15">
        <TextAreaInput
          error={error}
          errorMessage={"provide features"}
          field={"feature"}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          title={"Features"}
          type={"string"}
        />
        <TextAreaInput
          error={error}
          errorMessage={"provide description"}
          field={"description"}
          newProduct={newProduct}
          setNewProduct={setNewProduct}
          title={"Description"}
          type={"string"}
        />
      </div>
      <div>
        <AddImage newProduct={newProduct} setNewProduct={setNewProduct} />
      </div>
      <div className="my-5 flex justify-center">
        <PlainButton
          title={"Update Product"}
          onClick={() => updateProductDB()}
        />
      </div>
    </div>
  );
};

export default UpdateProduct;
