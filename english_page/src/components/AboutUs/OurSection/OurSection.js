import React from 'react';
import OurSectionItem from "./OurSectionItem/OurSectionItem";
import './OurSection.css';

const OurSection = props => (
    <div className="OurSection">
        <OurSectionItem
            bigNumber='01' title='Наша история'
            text='стартап Neobis был основан в 2016 году двумя девушками, студентками-программистами АУЦА, Санирой и Бегимай.'
        />
        <OurSectionItem
        bigNumber='02' title='Наша Идеология'
        text='улучшение качества IT инфраструктуры в Кыргызстане через повышение профессионализма и подготовленности выпускников'
        />
        <OurSectionItem
            bigNumber='03' title='Наша Миссия'
            text='безвозмездное менторство по улучшению практических навыков и последующее трудоустройство в крупные  IT компании  Кыргызстана'
        />
    </div>
);

export default OurSection;