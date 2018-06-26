import React from 'react';
import './WeTeachSection.css';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import PlatformIcon from "./PlatformIcon/PlatformIcon";
import ios from './icons/apple-icon.svg';
import android from './icons/android-logo.svg';
import front_end from './icons/browser-icon.svg';
import back_end from './icons/terminal-icon.svg';
import design from './icons/layout-icon.svg';
import gamedev from './icons/game-controller.svg';
import arvr from './icons/ar-glasses.svg';
import pm from './icons/project-management.svg';
import ba from './icons/ipo.svg';
import ScrollAnimation from 'react-animate-on-scroll';

const WeTeachSection = () => {
    const platformIcons = [
        <PlatformIcon title='ios' svg={ios}/>,
        <PlatformIcon title='android' svg={android}/>,
        <PlatformIcon title='front-end' svg={front_end}/>,
        <PlatformIcon title='back-end' svg={back_end}/>,
        <PlatformIcon title='ux/ui design' svg={design}/>,
        <PlatformIcon title='game dev' svg={gamedev}/>,
        <PlatformIcon title='ar/vr' svg={arvr}/>,
        <PlatformIcon title='проект - менеджмент' svg={pm}/>,
        <PlatformIcon title='бизнес - аналитика' svg={ba}/>
    ];

    return (
        <div className="WeTeachSection" id='weTeach'>
            <SectionTitle title='Чему мы можем научить?'/>
            <div className="Platforms">
                {platformIcons.map((platform, index) => (
                    <ScrollAnimation
                        animateIn='flipInY'
                        delay={index*100}
                        className='PlatformIcon'
                    >
                        {platform}
                    </ScrollAnimation>
                ))}
            </div>
        </div>
    );
};

export default WeTeachSection;