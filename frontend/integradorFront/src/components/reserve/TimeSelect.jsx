import React, { useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropDownTime from "./DropDownTime";

const TimeSelect = ({ timeSelect, setTimeSelect}) => {
  const [flagTimeDropDown, setFlagTimeDropDown] = useState(false);


  function handlerInputTime() {
    setFlagTimeDropDown(!flagTimeDropDown);
  }

  return (
    <div className="container-time-select">
      <h2 className="h2-time-select">Tu horario de llegada</h2>
      <div className="time-select-container">
        <div className="time-check-in">
          <span className="icon-check-time-select">
            <FaRegCheckCircle />
          </span>
          <p className="p-time-select">
            Tu habitación va a estar lista para el check-in entre las 10:00 AM y
            las 11:00 PM
          </p>
        </div>
        <div className="container-time-select-input">
          <label className="label-time-select" htmlFor="">
            Indicá tu horario estimado de llegada
          </label>
          <div
            className="div-input-time-select"
            onClick={() => handlerInputTime()}
          >
            <input
              className="input-time-select"
              type="text"
              placeholder="Seleccionar hora de llegada"
              disabled
              required
              value={timeSelect !== undefined ? timeSelect : ""}
            />
            <span className="icon-arrow-time-select">
              <MdKeyboardArrowDown />
            </span>
            {flagTimeDropDown && (
              <DropDownTime handlerInputTime={handlerInputTime} setTimeSelect={setTimeSelect}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;
