import React from "react";
import { BsPatchCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router";


const Success = () => {
  const navigate = useNavigate();

    function handleButton() {
        
        navigate("/")
    }


  return (
    <div className="main-container-success">
      <div className="container-success">
        <span className="logo-success"><BsPatchCheckFill/></span>
        <h2 className="h2-success">¡Muchas gracias!</h2>
        <h3 className="h3-success">Su reserva se ha realizado con éxito</h3>
        <button className="button-success" onClick={() => handleButton()}>Volver</button>
      </div>
    </div>
  );
};

export default Success;
