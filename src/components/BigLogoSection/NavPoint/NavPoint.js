import React from 'react';
import './NavPoint.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavPoint = props => (
    <AnchorLink className='NavPoint' href={'#' + props.href}/>
);

export default NavPoint;

