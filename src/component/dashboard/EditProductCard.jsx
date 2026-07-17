import React, { useState } from "react";
import PlainButton from "../buttons/PlainButton";
import UpdateProduct from "./UpdateProduct";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../fireBaseConfig";

const EditProductCard = ({ data }) => {
  const [show, setShow] = useState(false);
  const deleteProduct = async () => {
    const confirmed = window.confirm("Do you want to delete this product");
    if (confirmed) {
      try {
        await deleteDoc(doc(db, "Product", data.id));
        alert("product deleted sucessfully");
        window.location.reload();
      } catch (error) {
        console.log("error", error);
        alert("product cannot be deleted");
      }
    } else {
      alert("deletion canceled");
    }
  };
  return (
    <>
      <div className="flex bg-slate-200 border border-slate-300 rounded-xl overflow-hidden ">
        <div>
          <img
            src={data.image[0]}
            alt={data.productName}
            className="w-30 h-full"
          />
        </div>
        <div className="flex flex-1 justify-between p-4 text-lg font-medium text-slate-700 items-center">
          <div className="flex-1">
            <p>{data.category}</p>
            <p>{data.productName}</p>
          </div>
          <div className="w-30">
            <p>{data.rating}</p>
            <p>{data.price}</p>
          </div>
          <div className=" space-y-1 w-30">
            <PlainButton title={"Delete"} onClick={() => deleteProduct()} />
            <PlainButton title={"modify"} onClick={() => setShow(true)} />
          </div>
        </div>
      </div>
      {show && (
        <UpdateProduct productData={data} show={show} setShow={setShow} />
      )}
    </>
  );
};

export default EditProductCard;
