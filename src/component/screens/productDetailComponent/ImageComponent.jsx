import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageComponent = () => {
  return (
    <div className="flex-1 ">
      <Carousel>
        <div className="w-full h-90">
          <img
            src="https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg"
            alt="Burger Image"
          />
        </div>
        <div className="w-full h-90">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/29/17/45/burger-7419421_1280.jpg"
            alt="Burger Image"
          />
        </div>
        <div className="w-full h-90">
          <img
            src="https://tse2.mm.bing.net/th/id/OIP.sVvjZiDL2RKdLoRmv_gAcAHaEK?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Burger Image"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default ImageComponent;
