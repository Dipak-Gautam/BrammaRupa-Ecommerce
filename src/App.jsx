import React from "react";
import NavBar from "./component/headMain/NavBar";
import Footer from "./component/headMain/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./component/screens/HomeScreen";
import CartScreen from "./component/screens/CartScreen";
import ProductScreen from "./component/screens/ProductScreen";
const App = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <NavBar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/cart" element={<CartScreen />} />
          <Route path="/product" element={<ProductScreen />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
