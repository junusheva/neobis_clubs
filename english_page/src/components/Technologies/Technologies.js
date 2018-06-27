import React, {Fragment} from 'react';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';

import java from './icons/java.svg';
import js from './icons/js.svg';
import kotlin from './icons/kotlin.svg';
import python from './icons/python.svg';
import react from './icons/react.svg';
import swift from './icons/swift.svg';

import './Technologies.css';

const Technologies = props => {
    const icons = [ java, js, kotlin, python, react, swift];

    return (
        <div id='technologies'>
            <SectionTitle title='Технологии'/>
            {/*<ScrollAnimation animateIn='fadeIn'>*/}
                <div className="TechnologyIcons">
                    {icons.map((icon, index) => (
                        <div className="Icon" key={index}>
                            <img src={icon} alt=""/>
                        </div>
                    ))}
                </div>
            {/*</ScrollAnimation>*/}
        </div>
    );
}

export default Technologies;