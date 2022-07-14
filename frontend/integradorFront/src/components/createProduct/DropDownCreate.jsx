import React from "react";

const DropDownCreate = ({
  citiesData,
  categoriesData,
  featuresData,
  setCategory,
  setCity,
  setFeatureValue,
}) => {
  return (
    <div className="drop-down-container">
      {citiesData !== undefined &&
        citiesData.map((element, index) => {
          return (
            <div
              className="container-element"
              key={index + element.name}
              onClick={() => setCity(element)}
            >
              <p className="p-element">
                {element.name}, {element.countryName}
              </p>
            </div>
          );
        })}
      {categoriesData !== undefined &&
        categoriesData.map((element, index) => {
          return (
            <div
              className="container-element"
              key={index + element.title}
              onClick={() => setCategory(element)}
            >
              <p className="p-element">{element.title}</p>
            </div>
          );
        })}
      {featuresData !== undefined &&
        featuresData.map((element, index) => {
          return (
            <div
              className="container-element"
              key={index + element.name}
              onClick={() => setFeatureValue(element.name)}
            >
              <p className="p-element">{element.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default DropDownCreate;
