import React from "react";
import NavBar from "./component/headMain/NavBar";
import Footer from "./component/headMain/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./component/screens/HomeScreen";
import CartScreen from "./component/screens/CartScreen";
import ProductScreen from "./component/screens/ProductScreen";
import ProductDetailScreen from "./component/screens/ProductDetailScreen";
const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/product-detail" element={<ProductDetailScreen />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
