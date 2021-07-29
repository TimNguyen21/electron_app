import React from 'react';
import '../scss/Login.scss'

const Login = () => {
    return (
        <section className="cultivate-login">
            <label className="cultivate-login__label">Enter Your Key</label>
            <input className="cultivate-login__input" />
            <button className="cultivate-login__submit-button">Submit</button>
            <div className="cultivate-login__new-key-link">
                Need a new key?
            </div>
        </section>
    )
}

export default Login;