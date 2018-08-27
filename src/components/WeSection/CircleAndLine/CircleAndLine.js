import React from 'react';
import './CircleAndLine.css';

const CircleAndLine = props => (
    <div className="circleAndLineContainer">
        <div className="circle"><p>{props.numberString}</p></div>
        <div className="justDashedLine"/>
    </div>
);

export default CircleAndLine;