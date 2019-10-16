import React from 'react';
import './ProgressBar.scss';

function ProgressBar({ ...properties }) {
    const percentage = 100 * Math.min(properties.currentValue / properties.goalValue, 1);
    const barStyle = {
        width: `${percentage}%`
    }
    return (
        <div className="progress-bar">
            <div className='bar' style={barStyle}></div>
        </div>
    )
}

export default ProgressBar;
