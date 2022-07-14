import { React } from "react";
import { useNavigate } from "react-router";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

const BlockHeader = ({ productById, nav, adminText }) => {
  const navigate = useNavigate();

  return (
    <div className="container-blockHeader">
      <div className="container-blockHeader__title">
        <h3>{adminText !== undefined ? productById?.categoryDto.title : ""}</h3>
        <h2>{adminText !== undefined ? adminText : productById?.name}</h2>
      </div>
      <div className="container-blockHeader__icon">
        <span className="icon-blockHeader">
          <MdOutlineArrowBackIosNew
            onClick={() => {
              navigate(`/${nav !== undefined ? nav : " "}`);
            }}
          ></MdOutlineArrowBackIosNew>
        </span>
      </div>
    </div>
  );
};

export default BlockHeader;
