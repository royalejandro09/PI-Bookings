import React, { useContext } from 'react'
import { BsFacebook } from 'react-icons/bs'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router';
import Logged from './Logged';
import { UserData } from 'context/DataUserContext';

const Menu = ({ status, setStatus }) => {

    const navigate = useNavigate();

    const { userData, setUserData } = useContext(UserData)


    const pathName = useLocation().pathname

    const renderMenuMobile = (url) => {
        if (url === "/login") {
            return <Link to="/register" className='downMenu__register'>Crear cuenta</Link>
        } else if (url === "/register") {
            return <Link to="/login" className='downMenu__login'>Iniciar sesión</Link>
        } else {
            return (
                <>
                    <Link to="/register" className='downMenu__register'>Crear cuenta</Link>
                    <Link to="/login" className='downMenu__login'>Iniciar sesión</Link>
                </>
            )
        }
    }

    function handleLogout() {
        localStorage.removeItem('user')
        setUserData(null)
    }
    return (
        <div className={`menu ${status} `} >
            <div className='upMenu'>
                <p onClick={setStatus} className='closeIcon'>X</p>
                { userData ? <Logged /> : <p className='menuText'>menú</p>}

            </div>
            <div className='downMenu'>
                <div className='downMenu__user'>
                        {!userData ? renderMenuMobile(pathName) :
                        <div className='downMenu__user__sign-off'>
                            <p onClick={() => { navigate("/") }}>¿Deseas <span onClick={() => handleLogout()} className='user__sign-off'>cerrar sesión</span>?</p>
                        </div>}
                </div>
                <div className='downMenu__networks'>
                    <span className='reactFacebook'><BsFacebook /></span>
                    <span className='reactLinkedin'><FaLinkedinIn /></span>
                    <span className='reactTwitter'><AiOutlineTwitter /></span>
                    <span className='reactInstagram'><AiOutlineInstagram /></span>
                </div>
            </div>
        </div>
    )
}

export default Menu
