import React, { useState } from "react";
import ProductInput from "./ProductInput";
import TextAreaInput from "./TextAreaInput";
import AddImage from "./AddImage";
import PlainButton from "../buttons/PlainButton";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../fireBaseConfig";

const AddProduct = () => {
  const [newProduct, setNewProduct] = useState({
    category: "food",
    productName: "",
    price: "0",
    rating: "3",
    feature: "",
    description: "",
    image: [],
  });
  const [error, setError] = useState(false);

  const addProductDB = async () => {
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
        const docRef = await addDoc(collection(db, "Product"), newProduct);
        alert("Product Added sucessfully");
        setError(false);
        setNewProduct({
          category: "food",
          productName: "",
          price: "0",
          rating: "3",
          feature: "",
          description: "",
          image: [],
        });
      } catch (error) {
        console.log("error adding data", error);
        alert("product cannot be added");
      }
    }
  };

  return (
    <div className="flex-1 overflow-y-auto h-full w-full border px-7">
      <div className="text-2xl font-bold text-center">Add Product</div>
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
        <PlainButton title={"Add Product"} onClick={() => addProductDB()} />
      </div>
    </div>
  );
};

export default AddProduct;
