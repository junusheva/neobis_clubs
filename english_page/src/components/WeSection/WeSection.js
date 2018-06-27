import React from 'react';
import './WeSection.css';

const WeSection = props => (
    <div className="container">
        <div className="circleAndLineContainer">
            <div className="circle"><p>{props.number}</p></div>
            <div className="justDashedLine"/>
        </div>
        <div className="WeTextContainer" style={{textAlign: props.align}}>
            <p className="WeTextContainerTitle">{props.title}</p>
            <p className="WeTextContainerBody">{props.body}</p>
        </div>
    </div>
);

export default WeSection;