import React from 'react';
import './OurSectionItem.css';

const OurSectionItem = props => (
    <div className="OurSectionItem">
        <h1 className="ItemBigNumber">{props.bigNumber}</h1>
        <p className="ItemTitle">{props.title}</p>
        <p className="ItemText">{props.text}</p>
    </div>
);

export default OurSectionItem;