import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/electron/Nav.scss'

const Nav = () => {
    return (
        <section class="cultivate-nav">
            <Link to={'/login'}>
                <button>Key Login</button>
            </Link>
            <Link to={'/entry'}>
                <button>Processing</button>
            </Link>
            <Link to={'/confirmation'}>
                <button>Results</button>
            </Link>
            <Link to={'/summary'}>
                <button>Thank You</button>
            </Link>
        </section>
    )
}

export default Nav;