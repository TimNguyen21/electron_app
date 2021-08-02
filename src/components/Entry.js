import React from 'react';
import UplaodInfo from './UploadInfo'
import '../scss/Entry.scss'
import UploadLogo from '../images/UploadLogo.png'

const Entry = () => {
    return (
        <section className="cultivate-entry">
            <div className="cultivate-entry-header-label-wrapper">
                <div className="cultivate-entry-header-label">
                    Hi, <span className="cultivate-entry-client-label">Friends From Healthy Cities Foundation</span>
                </div>
                <div>
                    It’s time to create your annual cohort list. <span>Need help?</span> No problem!
                </div>
            </div>
            <div className="cultivate-entry-file-wrapper">
                <div className="cultivate-entry-file-upload">
                    <div>Drag CSV Files To Upload</div>
                    <img src={UploadLogo} />
                    <div>Or Select Files Here</div>
                </div>
                <div className="cultivate-entry-file-upload-summary">

                </div>
            </div>
            <div className="cultivate-entry-button-wrapper">
                <input type='button' value="Cancel All" />
                <input type='button' value="Next" />
            </div>
            <UplaodInfo />
        </section>
    )
}

export default Entry;