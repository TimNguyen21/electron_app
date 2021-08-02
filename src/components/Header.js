import React from 'react';
import '../scss/Header.scss'
import care2Logo from '../images/care2Logo.png'

const Header = () => {
    return (
        <div className="cultivate-header">
            <img src={care2Logo} />
        </div>
    )
}

export default Header;