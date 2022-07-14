import React from 'react';
import { useNavigate } from 'react-router';
import logo1 from 'assets/img/logo1.png';

const HeaderLogo = ({ props }) => {

    const navigate = useNavigate();

    return (

        <div> {/*eslint-disable-next-line*/}
            <a className="containerLogo" onClick={() => { navigate("/") }}>
                <div className="logo">
                    <img src={logo1} alt="logotipo" />
                </div>
                <h4 className="slogan">Sentite como en tu hogar</h4>
            </a>
        </div>
    )
}

export default HeaderLogo
