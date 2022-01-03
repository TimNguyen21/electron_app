import React from 'react';
import '../../scss/electron/UploadStatus.scss'
import errorLogo from '../../images/electron/errorLogo.png'

const UploadStatus = () => {
    return (
        <section class="cultivate-upload-status">
            <div class='cultivate-upload-status__error-wrapper'>

                <img class='cultivate-upload-status__error-icon' src={errorLogo} />

                <div class='cultivate-upload-status__error-message'>
                    There are errors in <span>two files</span>. Please correct them, and
                    <br />try again. Common errors, are <span>listed here</span>
                </div>
            </div>
            <div class='cultivate-upload-status__file-wrapper' >
                <div class='cultivate-upload-status__file-percentage'>100%</div>
                <div class='cultivate-upload-status__file-name-wrapper'>
                    <div class='cultivate-upload-status__file-name'>filename1.csv</div>
                    <div class='cultivate-upload-status__file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status__file-wrapper' >
                <div class='cultivate-upload-status__file-percentage'>25%</div>
                <div class='cultivate-upload-status__file-name-wrapper'>
                    <div class='cultivate-upload-status__file-name'>filename2.csv</div>
                    <div class='cultivate-upload-status__file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status__file-wrapper has-upload-error' >
                <div class='cultivate-upload-status__file-percentage'>!</div>
                <div class='cultivate-upload-status__file-name-wrapper'>
                    <div class='cultivate-upload-status__file-name'>filename3.csv</div>
                    <div class='cultivate-upload-status__file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status__file-wrapper' >
                <div class='cultivate-upload-status__file-percentage'>75%</div>
                <div class='cultivate-upload-status__file-name-wrapper'>
                    <div class='cultivate-upload-status__file-name'>filename4.csv</div>
                    <div class='cultivate-upload-status__file-remove-button'>x</div>
                </div>
            </div>
        </section>
    )
}

export default UploadStatus;