import React from "react";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex justify-between  md:px-20 bg-secondary p-4 ">
      <div className=" text-primary text-xl font-bold cursor-pointer hover:text-primaryHover">
        Nitro Store
      </div>
      <div className="flex items-center gap-4 text-2xl">
        <a href="/">
          <FaFacebookSquare className="text-gray-600 hover:text-gray-700 cursor-pointer" />
        </a>
        <a href="/">
          <FaSquareInstagram className="text-gray-600 hover:text-gray-700 cursor-pointer" />
        </a>
        <a href="/">
          <AiFillTikTok className="text-gray-600 hover:text-gray-700 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
