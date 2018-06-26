import React from 'react';
import './NavPoint.css';

const NavPoint = props => (
    <a className='NavPoint' href={'#' + props.href}/>
);

export default NavPoint;

