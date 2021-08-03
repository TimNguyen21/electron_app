import React from 'react';
import UplaodInfo from './UploadInfo'
import UplaodStatus from './UploadStatus'
import '../scss/Entry.scss'
import UploadLogo from '../images/UploadLogo.png'
import UploadStatus from "./UploadStatus";

const Entry = () => {
    return (
        <section class="cultivate-entry">
            <div class="cultivate-entry-header-label-wrapper">
                <div class="cultivate-entry-header-label">
                    Hi, <span class="cultivate-entry-client-label">Friends From Healthy Cities Foundation</span>
                </div>
                <div>
                    It’s time to create your annual cohort list. <span>Need help?</span> No problem!
                </div>
            </div>
            <div class="cultivate-entry-file-wrapper">
                <div class="cultivate-entry-file-upload">
                    <div>Drag CSV Files To Upload</div>
                    <img src={UploadLogo} />
                    <div>Or Select Files Here</div>
                </div>
                <div class="cultivate-entry-file-upload-summary">
                    <UploadStatus />
                </div>
            </div>
            <div class="cultivate-entry-button-wrapper">
                <input type='button' value="Cancel All" />
                <input type='button' value="Next" />
            </div>
            <UplaodInfo />
        </section>
    )
}

export default Entry;