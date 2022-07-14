import React from "react";
import { BsPlusLg } from "react-icons/bs";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddImages = ({ setImageValue, imageValue, setImages, images }) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  function handleAddImage(value, setValue, setType, array) {
    if (avoidRepeating(value, array) === undefined) {
      if (value !== undefined) {
        setType((prevState) => [
          ...prevState,
          {
            title: "TituloImagenrandom",
            urlImg: value,
          },
        ]);
        Toast.fire({
          icon: "success",
          title: "Imagen agregada",
        });

        setValue(undefined);
      } else {
        Toast.fire({
          icon: "error",
          title: "Debe llenar el campo",
        });
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "Imagen repetida",
      });
      setValue(undefined);
    }
  }

  function avoidRepeating(value, array) {
    return array.find((element) => element.urlImg === value);
  }

  function handleCross(value, array, set) {
    set(array.filter((element) => element.urlImg !== value));
  }

  return (
    <div className="container-add-features">
      <h2 className="h2-add-features">Cargar imágenes</h2>
      <div className="add-features-field">
        <div className="container-field-add-features">
          <input
            className="input-add-images"
            type="text"
            onChange={(event) => {
              setImageValue(event.target.value);
            }}
            value={imageValue === undefined ? "" : imageValue}
            placeholder="https://"
          />
          <span
            className="icon-plus-add-features"
            onClick={() =>
              handleAddImage(imageValue, setImageValue, setImages, images)
            }
          >
            <BsPlusLg />
          </span>
        </div>
        {images.length > 0 &&
          images.map((element, index) => {
            return (
              <div className="container-element-new" key={index}>
                <p className="p-element-new">{element.urlImg}</p>
                <span
                  className="icon-cross-create-product"
                  onClick={() => handleCross(element.urlImg, images, setImages)}
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

export default AddImages;
