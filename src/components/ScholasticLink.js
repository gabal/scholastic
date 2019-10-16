import React from 'react';
import './ScholasticLink.scss';

function ScholasticLink({ ...properties }) {
    return <a className="scholastic-link" href={properties.href}>{properties.children}</a>
}
export default ScholasticLink;
