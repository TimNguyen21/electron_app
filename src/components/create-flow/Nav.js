import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/create-flow/Nav.scss'

const Nav = () => {
    return (
        <section class="create-flow-nav">
            <Link to={'/create-flow/start-page'}>
                <button>Start Page</button>
            </Link>
            <Link to={'/create-flow/tutorial'}>
                <button>Tutorial</button>
            </Link>
            <Link to={'/create-flow/form'}>
                <button>Form</button>
            </Link>
            <Link to={'/create-flow/upload-image'}>
                <button>Upload Image</button>
            </Link>
        </section>
    )
}

export default Nav;