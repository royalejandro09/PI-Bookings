import axios from "axios";
import Avalible from "components/product/Avalible";
import Charac from "components/product/Charac";
// eslint-disable-next-line
import LocationMap from "components/product/LocationMap";
import Policy from "components/product/Policy";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockHeader from "components/product/BlockHeader";
import Description from "components/product/Description";
import Images from "components/product/Images";
import LocationData from "components/product/LocationData";
import SlideDesktop from "components/product/SlideDesktop";
import SlideMobile from "components/product/SlideMobile";

const Product = () => {
  const [productById, setProductById] = useState(null);
  const [flagSlide, setFlagSlide] = useState(false)
  const { id } = useParams();

  useEffect(() => {
    getProductById(id);
    // eslint-disable-next-line
  }, []);

  function getProductById(id) {
    axios
      .get(`/products/id/${id}`)
      .then((product) => setProductById(product.data))
      .catch((error) => console.log(error));
  }

  return (
    productById !== null && (
      <div>
        <BlockHeader productById={productById} />
        <LocationData productById={productById} />
        <Images productById={productById} setFlagSlide={setFlagSlide}/>
        {flagSlide === true ? <SlideDesktop setFlagSlide={setFlagSlide} productById={productById}/> : null}
        <SlideMobile productById={productById}/>
        <Description productById={productById} />
        <Charac productById={productById} />
        <Avalible productById={productById}/>
        {/* <LocationMap/> */}
        <Policy productById={productById}/>
      </div>
    )
  );
};

export default Product;
