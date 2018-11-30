import React from 'react';
import './SectionText.css';

const SectionText = props => (
    <div className="SectionTextContainer">
        <p className="SectionText"  style={{width: props.textWidth, textAlign: props.textAlign ? props.textAlign : 'center'}}>{props.children}</p>
    </div>
);

export default SectionText;