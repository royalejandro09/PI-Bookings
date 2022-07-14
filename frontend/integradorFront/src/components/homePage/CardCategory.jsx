import React from "react";
import "styles/cards/cardCategory.css";
import axios from "axios";

const CardCategory = ({
  category,
  changeCategory,
  setAcommodationData,
  setIdCategorySelected,
  idCategorySelected,
}) => {
  function handleCategory() {
    changeCategory(category.title);
    getByCategory(category.title);
    setIdCategorySelected(category.id);
  }

  function getByCategory(category) {
    axios
      .get(`/products/title/${category}`)
      .then((product) => setAcommodationData(product.data))
      .catch((error) => console.log(error));
  }

  return (
    <div
      className={
        idCategorySelected === category.id
          ? "container__cardCategory-selected"
          : "container__cardCategory"
      }
      onClick={() => handleCategory()}
    >
      <div className="container-img">
        <img className="img-category" src={category.imageUrl} alt="category" />
      </div>
      <div className="description-cardCartegory">
        <h3 className="h3-category">{category.title}</h3>
        <p className="p-quantity">{category.description}</p>
      </div>
    </div>
  );
};

export default CardCategory;
