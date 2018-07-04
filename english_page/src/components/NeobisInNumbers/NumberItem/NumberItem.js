import React from 'react';
import './NumberItem.css';

const NumberItem = props => (
    <div className="NumberItem">
        <p className="NumberItemNumber">{props.number}</p>
        <p className="NumberItemText">{props.text}</p>
    </div>
);

export default NumberItem;