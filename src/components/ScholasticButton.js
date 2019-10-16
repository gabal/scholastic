import React from 'react';
import './ScholasticButton.scss';

function ScholasticButton({ ...properties }) {
    return <button className="scholastic-button" {...(properties.type ? { type: properties.type } : {})}>{properties.children}</button>
}
export default ScholasticButton;
