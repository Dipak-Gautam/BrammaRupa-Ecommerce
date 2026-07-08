import React from "react";
import { NavLink } from "react-router";

const categories = [
  {
    image: "burger.png",
    title: " Fast Food",
    description:
      "Buy the  best test and hygienic food in pokhara. we offer fast delivery and cash on delivery . Enjoy your food with Nitro store",
  },
  {
    image: "pc.png",
    title: "Tech Product",
    description:
      "Buy the  best test and hygienic food in pokhara. we offer fast delivery and cash on delivery . Enjoy your food with Nitro store",
  },
  {
    image: "sneakers.png",
    title: " Sneakers",
    description:
      "Buy the  best test and hygienic food in pokhara. we offer fast delivery and cash on delivery . Enjoy your food with Nitro store",
  },
];

const CategoriesPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 cursor-pointer ">
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Categories</h1>
      <div className="flex gap-5 flex-wrap">
        {categories.map((items) => (
          <NavLink
            to={"/product"}
            key={items.title}
            className="bg-slate-100 border p-5 items-center w-60 rounded-2xl flex flex-col hover:bg-white hover:shadow-lg shadow-black/50 gap-3"
          >
            <div>
              <img
                src={`./icons/${items.image}`}
                alt="Categories Image"
                className="h-25"
              />
            </div>
            <div className="text-xl font-bold text-slate-700">
              {items.title}
            </div>
            <div className="text-sm font-medium text-slate-500 text-center">
              {items.description}
            </div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
