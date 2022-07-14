import React from 'react';
import HeaderLogo from "./HeaderLogo";
import User from './User';

const Header = ({ props }) => {
    return (
        <header>
            <HeaderLogo />
            <User/>
        </header>
    )
}

export default Header
