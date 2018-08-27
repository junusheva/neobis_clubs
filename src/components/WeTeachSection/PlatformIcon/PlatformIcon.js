import React from 'react';
import './PlatformIcon.css';

const PlatformIcon = props => (
    <div className="">
        <div className="IconImage">
            <img src={props.svg} alt={props.title}/>
        </div>
        <p>{props.title}</p>
    </div>
);

export default PlatformIcon;