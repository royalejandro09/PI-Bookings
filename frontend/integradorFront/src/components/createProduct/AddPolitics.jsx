import React from "react";
import { BsPlusLg } from "react-icons/bs";
import Swal from "sweetalert2";
import { RiDeleteBin6Line } from "react-icons/ri";

const AddPolitics = ({
  setRulesPolitics,
  setSecurityPolitics,
  setCancelPolitics,
  setRulePoliticValue,
  setSecurityValue,
  setCancelValue,
  rulePoliticValue,
  securityValue,
  cancelValue,
  rulesPolitics,
  securityPolitics,
  cancelPolitics,
}) => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });

  function handleAddPolitic(value, setPolicyValue, setPolicyType, array) {
    if (avoidRepeating(value, array) === undefined) {
      if (value !== undefined) {
        setPolicyType((prevState) => [...prevState, { description: value }]);
        Toast.fire({
          icon: "success",
          title: "Politica agregada",
        });

        setPolicyValue(undefined);
      } else {
        Toast.fire({
          icon: "error",
          title: "Debe llenar el campo",
        });
      }
    } else {
      Toast.fire({
        icon: "error",
        title: "Politica repetida",
      });
      setPolicyValue(undefined);
    }
  }

  function avoidRepeating(value, array) {
    return array.find((element) => element.description === value);
  }

  function handleCross(value, array, set) {
    set(array.filter((element) => element.description !== value));
  }

  return (
    <div className="container-add-politics">
      <h2 className="h2-add-features">Políticas del producto</h2>
      <div className="add-features-field">
        <div className="container-politic-add-politic">
          <h3 className="h3-add-politics">Normas de la casa</h3>
          <div className="container-field-add-features">
            <input
              className="input-add-images"
              type="text"
              onChange={(event) => {
                setRulePoliticValue(event.target.value);
              }}
              value={rulePoliticValue === undefined ? "" : rulePoliticValue}
              placeholder="Escribir aqui"
            />
            <span
              className="icon-plus-add-features"
              onClick={() =>
                handleAddPolitic(
                  rulePoliticValue,
                  setRulePoliticValue,
                  setRulesPolitics,
                  rulesPolitics
                )
              }
            >
              <BsPlusLg />
            </span>
          </div>
          {rulesPolitics.length > 0 &&
            rulesPolitics.map((element, index) => {
              return (
                <div className="container-element-new" key={index}>
                  <p className="p-element-new">{element.description}</p>
                  <span
                    className="icon-cross-create-product"
                    onClick={() =>
                      handleCross(
                        element.description,
                        rulesPolitics,
                        setRulesPolitics
                      )
                    }
                  >
                    <RiDeleteBin6Line />
                  </span>
                </div>
              );
            })}
        </div>
        <div className="container-politic-add-politic">
          <h3 className="h3-add-politics">Salud y seguridad</h3>
          <div className="container-field-add-features">
            <input
              className="input-add-images"
              type="text"
              onChange={(event) => {
                setSecurityValue(event.target.value);
              }}
              value={securityValue === undefined ? "" : securityValue}
              placeholder="Escribir aqui"
            />
            <span
              className="icon-plus-add-features"
              onClick={() =>
                handleAddPolitic(
                  securityValue,
                  setSecurityValue,
                  setSecurityPolitics,
                  securityPolitics
                )
              }
            >
              <BsPlusLg />
            </span>
          </div>
          {securityPolitics.length > 0 &&
            securityPolitics.map((element, index) => {
              return (
                <div className="container-element-new" key={index}>
                  <p className="p-element-new">{element.description}</p>
                  <span
                    className="icon-cross-create-product"
                    onClick={() =>
                      handleCross(
                        element.description,
                        securityPolitics,
                        setSecurityPolitics
                      )
                    }
                  >
                    <RiDeleteBin6Line />
                  </span>
                </div>
              );
            })}
        </div>
        <div className="container-politic-add-politic">
          <h3 className="h3-add-politics">Política de cancelación</h3>
          <div className="container-field-add-features">
            <input
              className="input-add-images"
              type="text"
              onChange={(event) => {
                setCancelValue(event.target.value);
              }}
              value={cancelValue === undefined ? "" : cancelValue}
              placeholder="Escribir aqui"
            />
            <span
              className="icon-plus-add-features"
              onClick={() =>
                handleAddPolitic(
                  cancelValue,
                  setCancelValue,
                  setCancelPolitics,
                  cancelPolitics
                )
              }
            >
              <BsPlusLg />
            </span>
          </div>
          {cancelPolitics.length > 0 &&
            cancelPolitics.map((element, index) => {
              return (
                <div className="container-element-new" key={index}>
                  <p className="p-element-new">{element.description}</p>
                  <span
                    className="icon-cross-create-product"
                    onClick={() =>
                      handleCross(
                        element.description,
                        cancelPolitics,
                        setCancelPolitics
                      )
                    }
                  >
                    <RiDeleteBin6Line />
                  </span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default AddPolitics;
