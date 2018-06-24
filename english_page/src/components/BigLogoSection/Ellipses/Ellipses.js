import React from 'react';
import backEllipse from './back-ellipse.svg';
import frontEllipse from './front-elips.svg';
import './Ellipses.css';
import NeobisBigLogo from "../NeobisBigLogo/NeobisBigLogo";

const Ellipses = props => (
    <div className='EllipsesContainer'>
        <img  className='BackEllipse' src={backEllipse} alt=""/>
        <img  className='FrontEllipse' src={frontEllipse} alt=""/>
        <NeobisBigLogo/>

    </div>
);

export default Ellipses;