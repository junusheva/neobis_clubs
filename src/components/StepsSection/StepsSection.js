import React from 'react';
import Step from "./Step/Step";
import './StepsSection.css';
import gears from './01-gears.svg';
import bulb from './02-bulb.svg';
import develop from './03-develop.svg';
import ScrollAnimation from 'react-animate-on-scroll';


const StepsSection = props => (
    <ScrollAnimation
        animateIn='bounceInLeft'
        animateOut='bounceOutRight'
    >
        <div className="StepsSection">
            <div className="StepsSectionContainer">
                <Step
                    title='Старт'
                    number='1'
                    svg={gears}
                >
                    Выбирай направление и обучайся под руководством опытных менторов
                </Step>
                <Step
                    title='Проекты'
                    number='2'
                    svg={bulb}
                >
                    Разработай несколько реальных коммерческих проектов и получи бесценный опыт работы в команде
                </Step>
                <Step
                    title='Менторство'
                    number='3'
                    svg={develop}
                >
                    Обучай других новичков и работай в основной команде Neobis
                </Step>
            </div>
        </div>
    </ScrollAnimation>
);

export default StepsSection;