import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownCreate from "./DropDownCreate";

const AddDescription = ({
  citiesData,
  categoriesData,
  flagDropCity,
  setFlagDropCity,
  flagDropCategory,
  setFlagDropCategory,
  setFlagDropFeatures,
  setCategory,
  setCity,
  category,
  city,
  setName,
  setAdress,
  setDescription,
  setTitleDescription,
}) => {
  function handleClickCategory() {
    setFlagDropCategory(!flagDropCategory);
    setFlagDropCity(false);
    setFlagDropFeatures(false);
  }

  function handleClickCity() {
    setFlagDropCity(!flagDropCity);
    setFlagDropCategory(false);
    setFlagDropFeatures(false);
  }

  return (
    <div>
      <div className="add-description-group-field">
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="name">
            Nombre de la propiedad
          </label>
          <input
            className="input-add-description"
            id="name"
            type="text"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="category">
            Categoria
          </label>
          <div
            className="container-drop-down-form-create-product"
            onClick={() => handleClickCategory()}
          >
            <input
              className="input-drop-down-create-product"
              id="category"
              type="text"
              value={category !== undefined ? category.title : ""}
              disabled
            />
            <span className="icon-arrow-create-product">
              <MdKeyboardArrowDown />
            </span>
            {/* DROP DOWN CATEGORIAS */}
            {flagDropCategory && (
              <DropDownCreate
                categoriesData={categoriesData}
                setCategory={setCategory}
              />
            )}
          </div>
        </div>
      </div>
      <div className="add-description-group-field">
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="adress">
            Dirección
          </label>
          <input
            className="input-add-description"
            id="adress"
            type="text"
            onChange={(event) => {
              setAdress(event.target.value);
            }}
          />
        </div>
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="city">
            Ciudad
          </label>
          <div
            className="container-drop-down-form-create-product"
            onClick={() => handleClickCity()}
          >
            <input
              className="input-drop-down-create-product"
              id="city"
              type="text"
              value={
                city !== undefined ? city.name + ", " + city.countryName : ""
              }
              disabled
            />
            <span className="icon-arrow-create-product">
              <MdKeyboardArrowDown />
            </span>
            {/* DROP DOWN CIUDADES */}
            {flagDropCity && (
              <DropDownCreate citiesData={citiesData} setCity={setCity} />
            )}
          </div>
        </div>
      </div>
      <div className="add-description-group-field">
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="title_description">
            Título descripción
          </label>
          <input
              className="input-add-description"
              id="title_description"
              type="text"
              // value={
              //   city !== undefined ? city.name + ", " + city.countryName : ""
              // }
              onChange={(event) => {
                setTitleDescription(event.target.value);
              }}
            />
        </div>
      </div>
      <div className="add-description-group-field">
        <div className="add-description-field">
          <label className="label-add-description" htmlFor="description">
            Descripción
          </label>
          <textarea
            className="input-add-description input-add-description-text"
            placeholder="Escribir aquí"
            id="description"
            cols="30"
            rows="10"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddDescription;
