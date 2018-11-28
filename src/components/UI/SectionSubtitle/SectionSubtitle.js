import React from 'react';
import './SectionSubtitle.css';

const SectionSubtitle = props => (
    <div className="SectionSubtitle">
        <h3>{props.title}</h3>
        <div className="SectionUnderline"/>
    </div>
);

export default SectionSubtitle;