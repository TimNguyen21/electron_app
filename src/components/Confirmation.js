import React from 'react';
import '../scss/Confirmation.scss'

const Confirmation = () => {
    return (
        <section class="cultivate-results">
            <div class="cultivate-results-header-label-wrapper">
                <div class="cultivate-results-header-label">
                    Here Are Your Preliminary Counts
                </div>
                <div>
                    This is not your final count, and the numbers may shift once we clean up the list.
                </div>
            </div>
            <div class='cultivate-results-summary-wrapper'>
                <div class='cultivate-results-summary-emails-wrapper'>
                    <div class='cultivate-results-summary-emails-label'>EMAILS</div>
                    <div class='cultivate-results-summary-emails-result'>12,236,879</div>
                </div>
                <div class='cultivate-results-summary-donors-wrapper'>
                    <div class='cultivate-results-summary-donors-label'>DONORS</div>
                    <div class='cultivate-results-summary-donors-result'>365,909</div>
                </div>
                <div class='cultivate-results-summary-non-donors-wrapper'>
                    <div class='cultivate-results-summary-non-donors-label'>NON-DONORS</div>
                    <div class='cultivate-results-summary-non-donors-result'>11,009,790</div>
                </div>
                <div class='cultivate-results-summary-actives-wrapper'>
                    <div class='cultivate-results-summary-actives-label'>ACTIVES</div>
                    <div class='cultivate-results-summary-actives-result'>6,467,890</div>
                </div>
                <div class='cultivate-results-summary-non-actives-wrapper'>
                    <div class='cultivate-results-summary-non-actives-label'>NON-ACTIVES</div>
                    <div class='cultivate-results-summary-non-actives-result'>6,467,890</div>
                </div>
            </div>
            <div class='cultivate-results-confirmation-wrapper'>
                <input class='cultivate-results-confirmation-button-cancel' value='Go Back'/>
                <input class='cultivate-results-confirmation-button-confirm' value="Confirm & Send to Care2"/>
            </div>
        </section>
    )
}

export default Confirmation;