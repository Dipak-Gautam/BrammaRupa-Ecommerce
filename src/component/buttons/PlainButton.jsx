import React from "react";

const PlainButton = ({ title, css, ...props }) => {
  return (
    <div
      className={`w-fit p-1 px-3  font-semibold rounded-lg cursor-pointer text-white  ${css ? css : "bg-primary hover:bg-primaryHover"}`}
      {...props}
    >
      {title}
    </div>
  );
};

export default PlainButton;
