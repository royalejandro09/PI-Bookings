import React from "react";
import { Carousel } from "react-responsive-carousel";
import "styles/product/slideMobile.css";

const SlideMobile = ({ productById }) => {
  return (
    <div className="container-slide-mobile">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={3000}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
        // width="100%"
      >
        <div className="container-img-slider">
          <img
            className="img-slider-mobile"
            src={productById.imagesDto[0]?.urlImg}
            alt=""
          />
        </div>
        <div className="container-img-slider">
          <img
            className="img-slider-mobile"
            src={productById.imagesDto[1]?.urlImg}
            alt=""
          />
        </div>
        <div className="container-img-slider">
          <img
            className="img-slider-mobile"
            src={productById.imagesDto[2]?.urlImg}
            alt=""
          />
        </div>
        <div className="container-img-slider">
          <img
            className="img-slider-mobile"
            src={productById.imagesDto[3]?.urlImg}
            alt=""
          />
        </div>
        <div className="container-img-slider">
          <img
            className="img-slider-mobile"
            src={productById.imagesDto[4]?.urlImg}
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SlideMobile;
