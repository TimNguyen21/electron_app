import React from 'react';
import '../../scss/electron/Header.scss'
import care2Logo from '../../images/electron/care2Logo.png'

const Header = () => {
    return (
        <div class="cultivate-header">
            <img src={care2Logo} />
        </div>
    )
}

export default Header;