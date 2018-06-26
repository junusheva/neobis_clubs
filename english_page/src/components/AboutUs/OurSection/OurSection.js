import React from 'react';
import OurSectionItem from "./OurSectionItem/OurSectionItem";
import './OurSection.css';
import ScrollAnimation from 'react-animate-on-scroll';

const OurSection = props => (
    <div className="OurSection">
        <ScrollAnimation
            delay={100}
            animateIn='fadeIn'
            duration={3}
            initiallyVisible={false}>
            <OurSectionItem
                bigNumber='01' title='Наша история'
                text='стартап Neobis был основан в 2016 году двумя девушками, студентками-программистами АУЦА, Санирой и Бегимай.'
            />
        </ScrollAnimation>
        <ScrollAnimation
            delay={400}
            animateIn='fadeIn'
            duration={3}
            initiallyVisible={false}>
            <OurSectionItem
                bigNumber='02' title='Наша Идеология'
                text='улучшение качества IT инфраструктуры в Кыргызстане через повышение профессионализма и подготовленности выпускников'
            />
        </ScrollAnimation>
        <ScrollAnimation
            delay={600}
            animateIn='fadeIn'
            duration={3}
            initiallyVisible={false}>
            <OurSectionItem
                bigNumber='03' title='Наша Миссия'
                text='безвозмездное менторство по улучшению практических навыков и последующее трудоустройство в крупные  IT компании  Кыргызстана'
            />
        </ScrollAnimation>
    </div>
);

export default OurSection;