import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const HeroPage = () => {
  return (
    <div className=" ">
      <Carousel autoPlay={true} infiniteLoop={true} className="relative">
        <div>
          <img src="./cloth.png" className="max-h-150" />
        </div>
        <div>
          <img src="./highRes.jpg" className="max-h-150" />
          <p className="absolute h-full flex flex-col justify-center p-20 z-40 top-0 w-full gap-4">
            <p className=" text-xl md:text-5xl text-white font-bold md:w-100 text-left">
              New Arrivals
            </p>
            <p className="md:w-100 text-slate-100 font-medium text-sm text-left">
              Best shoes in the town Lorem ipsum dolor sit amet consectetur,
              adipisicing elit. Atque eius fugit ut consectetur eaque,
              consequatur exercitationem placeat corporis doloribus fuga,
              quisquam, possimus quos recusandae? Voluptates incidunt saepe
              quasi magni culpa!
            </p>
          </p>
        </div>
        <div>
          <img src="./tech.png" className="max-h-150" />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroPage;
