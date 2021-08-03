import React from 'react';
import '../scss/Login.scss'

const Login = () => {
    return (
        <section class="cultivate-login">
            <label class="cultivate-login__label">Enter Your Key</label>
            <input class="cultivate-login__input" />
            <button class="cultivate-login__submit-button">Submit</button>
            <div class="cultivate-login__new-key-link">
                Need a new key?
            </div>
        </section>
    )
}

export default Login;