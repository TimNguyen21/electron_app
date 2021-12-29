import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/container/MainNav.scss';

const MainNav = () => {
    return (
        <section class="main-nav">
            <Link to={'/electron'}>
                <button>Electron App Design</button>
            </Link>
        </section>
    )
}

export default MainNav;