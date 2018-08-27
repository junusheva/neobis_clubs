import React from 'react';
import svg from './neobis.svg';
import './NeobisBigLogo.css';


const NeobisBigLogo = () => (
    <div className='NeobisBigLogoContainer'>
        <img src={svg} alt=""  className='NeobisBigLogo'/>
    </div>
);

export default NeobisBigLogo;