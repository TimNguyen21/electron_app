import React from 'react';
import UplaodInfo from './UploadInfo'
import UploadStatus from './UploadStatus'
import '../../scss/electron/Entry.scss'
import UploadLogo from '../../images/UploadLogo.png'

const Entry = () => {
    return (
        <section class="cultivate-processing">
            <div class="cultivate-processing-header-label-wrapper">
                <div class="cultivate-processing-header-label">
                    Hi, <span class="cultivate-processing-client-label">Friends From Healthy Cities Foundation</span>
                </div>
                <div>
                    It’s time to create your annual cohort list. <span>Need help?</span> No problem!
                </div>
            </div>
            <div class="cultivate-processing-file-wrapper">
                <div class="cultivate-processing-file-upload">
                    <div>Drag CSV Files To Upload</div>
                    <img src={UploadLogo} />
                    <div>Or Select Files Here</div>
                </div>
                <div class="cultivate-processing-file-upload-summary">
                    <UploadStatus />
                </div>
            </div>
            <div class="cultivate-processing-button-wrapper">
                <input type='button' value="Cancel All" />
                <input type='button' value="Next" />
            </div>
            <UplaodInfo />
        </section>
    )
}

export default Entry;