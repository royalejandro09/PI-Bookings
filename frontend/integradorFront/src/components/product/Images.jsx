import React from "react";
import { BiShareAlt } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";


function Images({ productById, setFlagSlide }) {
  return (
    <div className="container-images">
      <div className="container-images__icons">
        <span className="icon-images__share">
          <BiShareAlt />
        </span>
        <span className="icon-images__heart">
          <AiOutlineHeart />
        </span>
      </div>
      <div className="container-images__container">
        <div className="container-images__main">
          <img
            className="img__main"
            src={productById.imagesDto[0]?.urlImg}
            alt="Imagen principal"
          />
        </div>
        <div className="container-images__board">
          <img
            className="img__secondary"
            src={productById.imagesDto[1]?.urlImg}
            alt="Imagen secundaria"
          />
        </div>
        <div className="container-images__board">
          <img
            className="img__secondary"
            src={productById.imagesDto[2]?.urlImg}
            alt="Imagen secundaria"
          />
        </div>
        <div className="container-images__board">
          <img
            className="img__secondary"
            src={productById.imagesDto[3]?.urlImg}
            alt="Imagen secundaria"
          />
        </div>
        <div className="container-images__board_last">
          <img
            className="img__secondary"
            src={productById.imagesDto[4]?.urlImg}
            alt="Imagen secundaria"
          />
        <button className="container-images__board__ancor" onClick={() => setFlagSlide(true)}>
          Ver más
        </button>
        </div>
      </div>
    </div>
  );
}

export default Images;
