import React from 'react';
import './NavPoint.css';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const NavPoint = props =>
    (
        <AnchorLink href={'#' + props.href} className='NavPoint'/>
    );


export default NavPoint;

