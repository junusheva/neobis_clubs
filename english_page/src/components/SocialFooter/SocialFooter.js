import React from 'react';
import './SocialFooter.css';
import inst from './instagram.svg';
import linkedin from './linkedin-logo.svg';
import fb from './facebook-logo.svg';

const SocialFooter = props => (

    <div className="SocialFooter">
        <div className="SocialButtons">
            <a href="https://www.instagram.com/neobis.kg/"><img src={inst} alt=""/></a>
            <a href="https://www.linkedin.com/company/neob1s/"><img src={linkedin} alt=""/></a>
            <a href="https://www.facebook.com/neobis.clubs/"><img src={fb} alt=""/></a>
        </div>
        <div className="FooterDesc">
            <p>Design by Roman Kuzhel, developed by Aijan Junusheva</p>
            <p> 2018@All rights reserved.</p>
        </div>
    </div>
);

export default SocialFooter;