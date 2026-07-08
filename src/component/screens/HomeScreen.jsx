import React from "react";
import HeroPage from "../heroSection/HeroPage";
import CategoriesPage from "../categories/CategoriesPage";

const HomeScreen = () => {
  return (
    <div className="flex flex-1 h-full w-full flex-col">
      <HeroPage />
      <CategoriesPage />
    </div>
  );
};

export default HomeScreen;
