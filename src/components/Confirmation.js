import React from 'react';
import '../scss/Confirmation.scss'

const Confirmation = () => {
    return (
        <section className="cultivate-results">
            <div className="cultivate-results-header-label-wrapper">
                <div className="cultivate-results-header-label">
                    Here Are Your Preliminary Counts
                </div>
                <div>
                    This is not your final count, and the numbers may shift once we clean up the list.
                </div>
            </div>
            <div className='cultivate-results-wrapper'>
                <div className='cultivate-results-summary'>
                    <div className='cultivate-results-summary-emails'>
                        <div className='cultivate-results-summary-emails-label'>EMAILS</div>
                        <div className='cultivate-results-summary-emails-result'>12,236,879</div>
                    </div>
                    <div className='cultivate-results-summary-donors'>
                        <div className='cultivate-results-summary-donors-label'>DONORS</div>
                        <div className='cultivate-results-summary-donors-result'>365,909</div>
                    </div>
                    <div className='cultivate-results-summary-non-donors'>
                        <div className='cultivate-results-summary-non-donors-label'>NON-DONORS</div>
                        <div className='cultivate-results-summary-non-donors-result'>11,009,790</div>
                    </div>
                    <div className='cultivate-results-summary-actives'>
                        <div className='cultivate-results-summary-actives-label'>ACTIVES</div>
                        <div className='cultivate-results-summary-actives-result'>6,467,890</div>
                    </div>
                    <div className='cultivate-results-summary-non-actives'>
                        <div className='cultivate-results-summary-non-actives-label'>NON-ACTIVES</div>
                        <div className='cultivate-results-summary-non-actives-result'>6,467,890</div>
                    </div>
                </div>
            </div>
            <div className='cultivate-results-confirmation-wrapper'>
                <input className='cultivate-results-confirmation-button-cancel' value='Go Back'/>
                <input className='cultivate-results-confirmation-button-confirm' value="Confirm & Send to Care2"/>
            </div>
        </section>
    )
}

export default Confirmation;