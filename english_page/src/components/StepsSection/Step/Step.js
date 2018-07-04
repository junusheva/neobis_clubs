import React from 'react';
import './Step.css';

const Step = props => (
    <div className="Step">
        <div className="IconTitle">
            <div className="StepIconDashedBorder">
                <div className="StepIcon">
                    <img src={props.svg} alt=""/>
                </div>
            </div>

            <p className="StepNumber">{props.number}</p>
        </div>
        <div className="StepTitle">{props.title}</div>
        <div className="StepBody">{props.children}</div>
    </div>
);

export default Step;