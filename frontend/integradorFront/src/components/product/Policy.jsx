import React from "react";
import "styles/product/policy.css";

const Policy = ({ productById }) => {
  return (
    <div className="container-policy">
      <h2 className="h2-policy">Qué tenés que saber</h2>
      <div className="policy-container">
        <div className="div-policy">
          <h3 className="h3-policy">Normas</h3>
          {productById.policyHouseRulesDto.map((element, index) => {
            return <p key={element.id} className="p-policy">{element.description}</p>;
          })}
        </div>
        <div className="div-policy">
          <h3 className="h3-policy">Salud y Seguridad</h3>
          {productById.policyHealthSecurityDto.map((element , index) => {
            return <p key={element.id} className="p-policy">{element.description}</p>;
          })}
        </div>
        <div className="div-policy">
          <h3 className="h3-policy">Política de cancelación</h3>
          {productById.policyCancellationDto.map((element , index) => {
            return <p key={element.id} className="p-policy">{element.description}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Policy;
