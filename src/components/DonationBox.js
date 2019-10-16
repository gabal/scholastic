import React, { useState } from 'react';
import NumberFormat from 'react-number-format';
import ProgressDialog from './ProgressDialog';
import ProgressBar from './ProgressBar';
import ScholasticButton from './ScholasticButton';
import ScholasticLink from './ScholasticLink';
import './DonationBox.scss';

function DonationBox({ data }) {
    const [donationValue, setDonationValue] = useState(data.defaultDonation);
    return (
        <section className="app-container">
            <ProgressDialog amount={data.currentValue} goalValue={data.goalValue} neededMessage="still needed for this project" goodToGoMessage="got it!" />
            <ProgressBar currentValue={data.currentValue} goalValue={data.goalValue} />
            <div className="box bottom">
                <p><strong className="highlight">Only {data.daysLeft} days left</strong> to fund this project.</p>
                <p>Join the <strong>{data.totalDonors}</strong> other donors who have already supported this project. Every dollar helps.</p>
                <form>
                    <div className="column-container">
                        <div className="column-left">
                            <div className="donation-input">
                                <NumberFormat
                                    thousandSeparator={true}
                                    name="donation-value"
                                    min="50"
                                    value={donationValue}
                                    onChange={e => setDonationValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="column-right">
                            <ScholasticButton type="submit">Give Now</ScholasticButton>
                        </div>
                    </div>
                </form>
                <ScholasticLink href="/">Why give ${donationValue}?</ScholasticLink>
            </div>
            <div className="column-container last-row">
                <div className="column-left">
                    <ScholasticButton>Save for later</ScholasticButton>
                </div>
                <div className="column-right">
                    <ScholasticButton>Tell your friends</ScholasticButton>
                </div>
            </div>
        </section>
    )
}

export default DonationBox;
