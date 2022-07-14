import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import Button from 'components/utils/Button.jsx';
import burger from 'assets/img/burger.png';
import Menu from './Menu';
import Logged from './Logged';
import { useLocation } from 'react-router-dom';
import { UserData } from 'context/DataUserContext';


const User = () => {

    const [menuActive, setMenuActive] = useState(false);

    const menuStatus = menuActive ? 'menu--active' : 'menu--disable';

    function handleMenuActive() {
        setMenuActive(!menuActive)
    }

    const { userData } = useContext(UserData)


    const pathName = useLocation().pathname

        const renderMenu = (url) => {
            if (url === "/login") {
                return <Link to="/register"><Button hidden={'button--mobile'}>
                    Crear cuenta</Button></Link>
            } else if (url === "/register") {
                return <Link to="/login"><Button hidden={'button--mobile'}>
                    Iniciar sesión</Button></Link>
            } else {
                return (
                    <>
                        <Link to="/register"><Button hidden={'button--mobile'}>
                            Crear cuenta</Button></Link>
                        <Link to="/login"><Button hidden={'button--mobile'}>
                            Iniciar sesión</Button></Link>
                    </>
                )
            }
        }
    return (
        <div className='initUser'>
            {!userData ? renderMenu(pathName) : <Logged hidden={'button--mobile'}/> } 
            <img onClick={handleMenuActive} className='menuBurger' src={burger} alt='menú' />
            <Menu status={menuStatus} setStatus={handleMenuActive}  />
        </div>
    )
}

export default User