import React from 'react';
import './ProgressDialog.scss';
//apatel@scholastic.com
function ProgressDialog({ ...properties }) {
    const remaining = properties.goalValue - properties.amount;
    if (remaining <= 0) {
        return <div className="progress-dialog">{properties.goodToGoMessage}</div>
    } else {
        return (
            <div className="progress-dialog">
                <strong>${remaining}</strong> {properties.neededMessage}
            </div>
        )
    }
}

export default ProgressDialog;
