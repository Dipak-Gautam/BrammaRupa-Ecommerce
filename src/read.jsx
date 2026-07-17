import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));

      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Rs. {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default App;

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "Product"));

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(productList);

      setProducts(productList);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();
}, []);

//read specefic product
useEffect(() => {
  const fetchProduct = async () => {
    try {
      const docRef = doc(db, "Product", "YOUR_DOCUMENT_ID");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const product = {
          id: docSnap.id,
          ...docSnap.data(),
        };

        console.log(product);

        setProduct(product); // useState(null)
      } else {
        console.log("No such product!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchProduct();
}, []);

// readt with catogery

useEffect(() => {
  const fetchProducts = async () => {
    try {
      const q = query(
        collection(db, "Product"),
        where("category", "==", "food"),
      );

      const querySnapshot = await getDocs(q);

      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      console.log(productList);

      setProducts(productList);
    } catch (error) {
      console.log(error);
    }
  };

  fetchProducts();
}, []);

//delete product
const deleteProduct = async (productId) => {
  try {
    await deleteDoc(doc(db, "Product", productId));
    console.log("Deleted successfully");
  } catch (error) {
    console.log(error);
  }
};
// update product
const updateProduct = async (productId) => {
  try {
    const productRef = doc(db, "Product", productId);

    await updateDoc(productRef, {
      productName: "pizza",
      price: 250,
      category: "food",
    });

    console.log("Product updated successfully!");
  } catch (error) {
    console.log(error);
  }
};
// sending data to next page
<NavLink
  to="/product-detail"
  state={{ product: data }}
  className="w-70 overflow-hidden rounded-2xl border border-gray-300 h-fit cursor-pointer bg-slate-100 hover:bg-slate-50 hover:shadow-lg shadow-black/50"
></NavLink>;

import { useLocation } from "react-router-dom";
const location = useLocation();

const data = location.state?.product;

console.log(data);
