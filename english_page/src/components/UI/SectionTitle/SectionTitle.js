import React from 'react';
import './SectionTitle.css';

const SectionTitle = props => (
    <div className="SectionTitle">
        <h3>{props.title}</h3>
        <div className="SectionUnderline"/>
    </div>
);

export default SectionTitle;