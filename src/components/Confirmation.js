import React from 'react';
import '../scss/Confirmation.scss'

const Confirmation = () => {
    return (
        <section class="cultivate-results">
            <div class="cultivate-results__header-label-wrapper">
                <div class="cultivate-results__header-label">
                    Here Are Your Preliminary Counts
                </div>
                <div>
                    This is not your final count, and the numbers may shift once we clean up the list.
                </div>
            </div>
            <div class='cultivate-results__summary-wrapper'>
                <div class='cultivate-results__summary-emails-wrapper'>
                    <div class='cultivate-results__summary-emails-label'>EMAILS</div>
                    <div class='cultivate-results__summary-emails-result'>12,236,879</div>
                </div>
                <div class='cultivate-results__summary-donors-wrapper'>
                    <div class='cultivate-results__summary-donors-label'>DONORS</div>
                    <div class='cultivate-results__summary-donors-result'>365,909</div>
                </div>
                <div class='cultivate-results__summary-non-donors-wrapper'>
                    <div class='cultivate-results__summary-non-donors-label'>NON-DONORS</div>
                    <div class='cultivate-results__summary-non-donors-result'>11,009,790</div>
                </div>
                <div class='cultivate-results__summary-actives-wrapper'>
                    <div class='cultivate-results__summary-actives-label'>ACTIVES</div>
                    <div class='cultivate-results__summary-actives-result'>6,467,890</div>
                </div>
                <div class='cultivate-results__summary-non-actives-wrapper'>
                    <div class='cultivate-results__summary-non-actives-label'>NON-ACTIVES</div>
                    <div class='cultivate-results__summary-non-actives-result'>6,467,890</div>
                </div>
            </div>
            <div class='cultivate-results__confirmation-wrapper'>
                <input class='cultivate-results__confirmation-button-cancel' value='Go Back'/>
                <input class='cultivate-results__confirmation-button-confirm' value="Confirm & Send to Care2"/>
            </div>
        </section>
    )
}

export default Confirmation;