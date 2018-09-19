import React from 'react';
import NavPoint from "../../BigLogoSection/NavPoint/NavPoint";
import './NavBar.css';

const NavBar = props => (
    <div className="NavBar">
        <NavPoint href='main' linkTitle={'Start'}/>
        <NavPoint href='aboutUs' linkTitle={'About us'}/>
        <NavPoint href='educationSteps' linkTitle={'Education steps'}/>
        <NavPoint href='NeobisInNumbers' linkTitle={'Neobis in numbers'}/>
        <NavPoint href='weTeach' linkTitle={'What we teach?'}/>
        <NavPoint href='technologies' linkTitle={'Our technologies'}/>
        <NavPoint href='graduates' linkTitle={'Our graduates'}/>
        <NavPoint href='contacts' linkTitle={'Our contact info'}/>
    </div>
);

export default NavBar;