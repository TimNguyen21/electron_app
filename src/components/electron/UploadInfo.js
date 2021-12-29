import React from 'react';
import '../../scss/electron/UploadInfo.scss'

const UploadInfo = () => {
    return (
        <section class="cultivate-upload__info">
            <div>How to Create Your Annual Cohort* List</div>
            <div>Start by <span>downloading</span> the sample CSV file.</div>
            <div>Your <span>CSV</span> file(s) must have the following headers: Email, Donor, Active</div>
            <div>Donor and activity statuses must be boolean (True/False)</div>
            <div class="cultivate-upload__info-status-wrapper">
                <div>Donor=True</div>
                <div>Non-Donor=False</div>
                <div>Active=True</div>
                <div>Inactive=False</div>
            </div>
            <div>Emails must be unhashed. Our kickoff app does the hashing- keeping your data safe and secure.</div>
            <div>The app also produces an invalid email list. You’ll find it in the same folder as the output file.</div>
            <div class="border-line"></div>
            <div>What To Check For If You Get An Error During Uploads</div>
            <div>Emails must be unhashed. Our kickoff app does the hashing- keeping your data safe and secure.</div>
            <div>The app also produces an invalid email list. You’ll find it in the same folder as the output file.</div>
            <div>*&nbsp;<span>Glossary of Terms.</span></div>
        </section>
    )
}

export default UploadInfo;