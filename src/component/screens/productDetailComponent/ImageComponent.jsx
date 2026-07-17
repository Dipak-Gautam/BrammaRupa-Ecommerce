import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const ImageComponent = ({ data }) => {
  return (
    <div className="flex-1 ">
      <Carousel>
        {data.image.map((itemImage) => (
          <div className="w-full h-90">
            <img src={itemImage} alt={data.productName} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageComponent;
