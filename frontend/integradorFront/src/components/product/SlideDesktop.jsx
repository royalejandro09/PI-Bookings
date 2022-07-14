// eslint-disable-next-line
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "styles/product/slideDesktop.css";

const SlideDesktop = ({ setFlagSlide, productById }) => {

  return (
    <div className="container-slide-main">
      <div className="slide-container">
        <span className="cross-span" onClick={() => setFlagSlide(false)}>
          X
        </span>
        <Carousel
          statusFormatter={(currentItem, total) => `${currentItem}/${total}`}
          infiniteLoop={true}
          thumbWidth="25%"
        >
          <div className="container-img-slider">
            <img className="img-slider-desktop" src={productById.imagesDto[0]?.urlImg} alt="" />
          </div>
          <div className="container-img-slider">
            <img className="img-slider-desktop" src={productById.imagesDto[1]?.urlImg} alt="" />
          </div>
          <div className="container-img-slider">
            <img className="img-slider-desktop" src={productById.imagesDto[2]?.urlImg} alt="" />
          </div>
          <div className="container-img-slider">
            <img className="img-slider-desktop" src={productById.imagesDto[3]?.urlImg} alt="" />
          </div>
          <div className="container-img-slider">
            <img className="img-slider-desktop" src={productById.imagesDto[4]?.urlImg} alt="" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default SlideDesktop;
