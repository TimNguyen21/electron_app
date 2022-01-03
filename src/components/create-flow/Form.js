import React from 'react';
import '../../scss/create-flow/Form.scss'
import care2Logo from "../../images/create-flow/care2Logo.png";

const Form = () => {
    return (
        <main class="create-flow-form">
            <header class="create-flow-form__header">
                <img src={care2Logo} />
                <button class="create-flow-form__publish-button">PUBLISH</button>
            </header>
            <form class="create-flow-form__form">
                <label class="create-flow-form__header-label">BUILD YOUR PETITION</label>
                <div class="create-flow-form__input">
                    <div class="create-flow-form__input-label">
                        <div class="create-flow-form__input-label-text">
                            <div class="create-flow-form__input-label-icon">&#128247;</div>
                            CHANGE IMAGE
                        </div>
                        <div class="create-flow-form__input-tool-tip">
                            ?
                        </div>
                    </div>
                    <img src="https://media1.popsugar-assets.com/files/thumbor/PjjJ4I0zydAEM56U4ngo9GMYPFY/1x647:2001x1471/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/23/671/n/1922243/9149b6bd5d88df88e30c16.96885837_.jpg" class="create-flow-form__input-image-area"></img>
                </div>
            </form>
            <button className="create-flow-form__publish-button">PUBLISH</button>
        </main>
    )
}

export default Form;