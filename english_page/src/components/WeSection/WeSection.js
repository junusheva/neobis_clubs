import React from 'react';
import './WeSection.css';

const WeSection = props => (
    <div className="WeSectionContainer">
        <div className="circleAndLineContainer">
            <div className="circle"><p>{props.number}</p></div>
            <div className="justDashedLine"/>
        </div>
        <div className="WeSectionTreeText" style={{textAlign: props.align}}>
            <p className="WeTextContainerTitle">{props.title}</p>
            <p className="WeTextContainerBody">{props.body}</p>
        </div>
        <img src={props.svg} alt="" className='WeSectionSvg'/>
    </div>

);

export default WeSection;