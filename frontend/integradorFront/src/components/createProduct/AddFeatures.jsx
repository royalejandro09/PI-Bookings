import React from "react";
import { BsPlusLg } from "react-icons/bs";
import DropDownCreate from "./DropDownCreate";
import { MdKeyboardArrowDown } from "react-icons/md";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddFeatures = ({
  featuresData,
  flagDropFeatures,
  setFlagDropFeatures,
  setFlagDropCategory,
  setFlagDropCity,
  setFeatureValue,
  featureValue,
  setFeatures,
  features,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  function handleClickFeatures() {
    setFlagDropFeatures(!flagDropFeatures);
    setFlagDropCategory(false);
    setFlagDropCity(false);
  }

  function avoidRepeating(value) {
    return features.find((element) => element.name === value);
  }

  function handlePlus() {
    setFlagDropFeatures(false)

    if (avoidRepeating(featureValue) === undefined) {
      if (featureValue !== undefined) {
        setFeatures((prevState) => [...prevState, { name: featureValue }]);
        Toast.fire({
          icon: "success",
          title: "Caracteristica agregada",
        });
        setFeatureValue(undefined);
      } else {
        Toast.fire({
          icon: "error",
          title: "Debe llenar el campo",
        });
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "Caracteristica repetida",
      });
      setFeatureValue(undefined);
    }
  }

  function handleCross(value) {
    setFlagDropFeatures(false)
    setFlagDropCategory(false);
    setFlagDropCity(false);
    setFeatures(features.filter((element) => element.name !== value));
  }

  return (
    <div className="container-add-features">
      <h2 className="h2-add-features">Agregar atributos</h2>
      <div className="add-features-field">
        <label className="label-add-description" htmlFor="">
          Nombre
        </label>
        <div className="container-field-add-features">
          <div
            className="cont-aux-add-features"
            onClick={() => handleClickFeatures()}
          >
            <input
              className="input-add-features"
              type="text"
              value={featureValue !== undefined ? featureValue : ""}
              disabled
              required
            />
            {flagDropFeatures && (
              <DropDownCreate
                featuresData={featuresData}
                setFeatureValue={setFeatureValue}
              />
            )}
            <span className="icon-arrow-create-product">
              <MdKeyboardArrowDown />
            </span>
          </div>
          <span className="icon-plus-add-features" onClick={() => handlePlus()}>
            <BsPlusLg />
          </span>
        </div>
        {features.length > 0 &&
          features.map((element, index) => {
            return (
              <div className="container-element-new" key={index}>
                <p className="p-element-new">{element.name}</p>
                <span
                  className="icon-cross-create-product"
                  onClick={() => handleCross(element.name)}
                >
                  <RiDeleteBin6Line />
                </span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default AddFeatures;
