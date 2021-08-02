import React from 'react';
import '../scss/UploadInfo.scss'

const UploadInfo = () => {
    return (
        <section className="cultivate-upload-info">
            <div>
                How to Create Your Annual Cohort* List
            </div>
            <div>
                Start by <span>downloading</span> the sample CSV file.
            </div>
            <div>
                Your <span>CSV</span> file(s) must have the following headers: Email, Donor, Active
            </div>
            <div>
                Donor and activity statuses must be boolean (True/False)
            </div>
            <div className="cultivate-upload-status-wrapper">
                <div>
                    Donor=True
                </div>
                <div>
                    Non-Donor=False
                </div>
                <div>
                    Active=True
                </div>
                <div>
                    Inactive=False
                </div>
            </div>
            <div>
                Emails must be unhashed. Our kickoff app does the hashing- keeping your data safe and secure.
            </div>
            <div>
                The app also produces an invalid email list. You’ll find it in the same folder as the output file.
            </div>
            <div className="border-line"></div>
            <div>
                What To Check For If You Get An Error During Uploads
            </div>
            <div>
                Emails must be unhashed. Our kickoff app does the hashing- keeping your data safe and secure.
            </div>
            <div>
                The app also produces an invalid email list. You’ll find it in the same folder as the output file.
            </div>
            <div>
                * <span>Glossary of Terms.</span>
            </div>
        </section>
    )
}

export default UploadInfo;