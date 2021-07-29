import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/Nav.scss'

const Nav = () => {
    return (
        <section className="cultivate-nav">
            <Link to={'/login'}>
                <button>Login</button>
            </Link>
            <Link to={'/entry'}>
                <button>Entry</button>
            </Link>
            <Link to={'/confirmation'}>
                <button>Confirmation</button>
            </Link>
            <Link to={'/summary'}>
                <button>Summary</button>
            </Link>
        </section>
    )
}

export default Nav;