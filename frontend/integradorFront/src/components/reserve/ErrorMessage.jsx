import React from "react";
import { BiErrorCircle } from "react-icons/bi";

const ErrorMessage = ({ errorMessage }) => {
  return (
    <div className="container-error-message">
      <span className="error-icon-detail">
        <BiErrorCircle />
      </span>
      <p className="p-error-message">{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
