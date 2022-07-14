import React from "react";
import "styles/product/charac.css";
import { MdKitchen } from "react-icons/md";
import { IoMdCar } from "react-icons/io";
import { CgScreen } from "react-icons/cg";
import { BiSwim } from "react-icons/bi";
import { BsSnow } from "react-icons/bs";
import { BiWifi } from "react-icons/bi";
import { FaPaw } from "react-icons/fa";

const Charac = ({ productById }) => {
  function getCharac(product) {
    const productToLowerCase = product.toLowerCase();

    if (productToLowerCase === "cocina") return <MdKitchen />;
    if (productToLowerCase === "televisor") return <CgScreen />;
    if (productToLowerCase === "aire acondicionado") return <BsSnow />;
    if (productToLowerCase === "apto mascotas") return <FaPaw />;
    if (productToLowerCase === "estacionamiento gratuito") return <IoMdCar />;
    if (productToLowerCase === "pileta") return <BiSwim />;
    if (productToLowerCase === "wifi") return <BiWifi />;
  }

  return (
    <div className="container-charac">
      <h2 className="h2-charac">¿Qué ofrece este lugar?</h2>
      <div className="charac-container">
        {productById.featureDto.map((feature, index) => {
          return (
            <div className="div-charac" key={index}>
              <span className="icon-charac">{getCharac(feature.name)}</span>
              <p className="p-charac">{feature.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Charac;
