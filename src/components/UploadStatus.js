import React from 'react';
import '../scss/UploadStatus.scss'
import errorLogo from '../images/errorLogo.png'

const UploadStatus = () => {
    return (
        <section class="cultivate-upload-status">
            <div class='cultivate-upload-status-error-wrapper'>

                <img class='cultivate-upload-status-error-icon' src={errorLogo} />

                <div class='cultivate-upload-status-error-message'>
                    There are errors in <span>two files</span>. Please correct them, and
                    <br />try again. Common errors, are <span>listed here</span>
                </div>
            </div>
            <div class='cultivate-upload-status-file-wrapper' >
                <div class='cultivate-upload-status-file-percentage'>100%</div>
                <div class='cultivate-upload-status-file-name-wrapper'>
                    <div class='cultivate-upload-status-file-name'>filename1.csv</div>
                    <div class='cultivate-upload-status-file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status-file-wrapper' >
                <div class='cultivate-upload-status-file-percentage'>25%</div>
                <div class='cultivate-upload-status-file-name-wrapper'>
                    <div class='cultivate-upload-status-file-name'>filename2.csv</div>
                    <div class='cultivate-upload-status-file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status-file-wrapper has-upload-error' >
                <div class='cultivate-upload-status-file-percentage'>!</div>
                <div class='cultivate-upload-status-file-name-wrapper'>
                    <div class='cultivate-upload-status-file-name'>filename3.csv</div>
                    <div class='cultivate-upload-status-file-remove-button'>x</div>
                </div>
            </div>
            <div class='cultivate-upload-status-file-wrapper' >
                <div class='cultivate-upload-status-file-percentage'>75%</div>
                <div class='cultivate-upload-status-file-name-wrapper'>
                    <div class='cultivate-upload-status-file-name'>filename4.csv</div>
                    <div class='cultivate-upload-status-file-remove-button'>x</div>
                </div>
            </div>
        </section>
    )
}

export default UploadStatus;