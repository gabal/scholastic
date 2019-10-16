import React from 'react';
import 'normalize.css';
import './App.scss';
import DonationBox from './components/DonationBox';

function App() {
    const data = {
        goalValue: 668,
        currentValue: 501,
        daysLeft: 3,
        totalDonors: 42,
        defaultDonation: 50
    };
    return (
        <div className="App">
            <DonationBox data={data} />
        </div>
    );
}
export default App;