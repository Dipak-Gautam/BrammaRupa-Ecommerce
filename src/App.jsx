import React from "react";
import NavBar from "./component/headMain/NavBar";
import Footer from "./component/headMain/Footer";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import HomeScreen from "./component/screens/HomeScreen";
import CartScreen from "./component/screens/CartScreen";
import ProductScreen from "./component/screens/ProductScreen";
import ProductDetailScreen from "./component/screens/ProductDetailScreen";
import MainCheckOutPage from "./component/checkout/MainCheckOutPage";
import DashboardPage from "./component/dashboard/DashboardPage";
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
          <Route path="/checkout" element={<MainCheckOutPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
