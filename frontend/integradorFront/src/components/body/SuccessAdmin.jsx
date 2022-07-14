import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const SuccessAdmin = () => {
    const navigate = useNavigate();

    function handleButton() {
        
        navigate("/")
    }


  return (
    <div className="main-container-success">
      <div className="container-success">
        <span className="logo-success"><BsPatchCheckFill/></span>
        <h3 className="h3-success">Tu propiedad se ha creado con éxito</h3>
        <button className="button-success" onClick={() => handleButton()}>Volver</button>
      </div>
    </div>
  );
}

export default SuccessAdmin