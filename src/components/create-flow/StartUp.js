import React from 'react';
import '../../scss/create-flow/StartUp.scss'
import care2Logo from "../../images/create-flow/care2Logo.png";

const StartUp = () => {
    return (
        <main class="create-flow-start-up">
            <header>
                <img src={care2Logo} />
            </header>
            <form class="create-flow-start-up__form">
                <label class='create-flow-start-up__header'>LET'S GET STARTED WITH A FEW EASY QUESTIONS</label>
                <div class='create-flow-start-up__input'>
                    <label>WHAT IS YOUR NAME?</label>
                    <input />
                </div>
                <div class='create-flow-start-up__input'>
                    <label>WHAT IS YOUR PETITION ABOUT?</label>
                    <input />
                </div>
                <div class='create-flow-start-up__input'>
                    <label>IS YOUR PETITION SPECIFIC TO A CITY, STATE OR COUNTRY?</label>
                    <input />
                </div>
            </form>
            <button class="create-flow-start-up__build-petition-button">Build Petition</button>
        </main>
    )
}

export default StartUp;