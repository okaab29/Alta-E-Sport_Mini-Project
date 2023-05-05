import { Carousel } from "antd";
import React from "react";
import { IMG_CAROUSEL } from "./constants";

const CarouselSection = () => {
  return (
    <div>
      <Carousel autoplay style={{ marginBottom: '80px' }}>
        {IMG_CAROUSEL.map((image) => (
          <div key={image.id}>
            <img
              src={image.img}
              alt={`Slide ${image.id}`}
              style={{ width: "900px", margin: "auto" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;
