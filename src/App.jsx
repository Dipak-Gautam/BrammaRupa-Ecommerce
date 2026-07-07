import React from "react";
import NavBar from "./component/headMain/NavBar";
import HeroPage from "./component/heroSection/HeroPage";
import CategoriesPage from "./component/categories/CategoriesPage";

const App = () => {
  return (
    <div className="h-screen w-full">
      <NavBar />
      <div>
        <HeroPage />
        <CategoriesPage />
      </div>
    </div>
  );
};

export default App;
