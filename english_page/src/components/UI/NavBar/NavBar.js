import React from 'react';
import NavPoint from "../../BigLogoSection/NavPoint/NavPoint";
import './NavBar.css';

const NavBar = props => (
    <div className="NavBar">
        <NavPoint href='main'/>
        <NavPoint href='aboutUs'/>
        <NavPoint href='weTeach'/>
        <NavPoint/>
    </div>
);

export default NavBar;