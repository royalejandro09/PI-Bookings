import { UserData } from "context/DataUserContext";
import React, { useContext } from "react";
import "styles/reserve/formReserve.css";

const FormReserve = () => {


  const { userData } = useContext(UserData)
    

  return (
    <div className="container-form-reserve">
      <h2 className="h2-form-reserve">Completá tus datos</h2>
      <div className="form-reserve-container">
        <form>
          <div className="group-field-reserve">
            <div className="field-reserve">
              <label htmlFor="name" className="label-reserve">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                className="input-reserve"
                placeholder="Nombre"
                disabled
                value={userData?.name}
              />
            </div>
            <div className="field-reserve">
              <label htmlFor="lastName" className="label-reserve">
                Apellido
              </label>
              <input
                type="text"
                id="lastName"
                className="input-reserve"
                placeholder="Apellido"
                disabled
                value={userData?.lastName}
              />
            </div>
          </div>
          <div className="group-field-reserve">
            <div className="field-reserve">
              <label htmlFor="email" className="label-reserve">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                className="input-reserve"
                placeholder="Correo Electrónico"
                disabled
                value={userData?.mail}
              />
            </div>
            <div className="field-reserve">
              <label htmlFor="city" className="label-reserve">
                Ciudad
              </label>
              <input
                type="text"
                id="city"
                className="input-reserve"
                placeholder="Ciudad"
                required
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormReserve;
