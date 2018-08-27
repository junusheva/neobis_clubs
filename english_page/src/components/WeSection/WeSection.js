import React from 'react';
import './WeSection.css';
import CircleAndLine from "../../components/WeSection/CircleAndLine/CircleAndLine";
import WeTextTitleAndBody from "../../components/WeSection/WeTextTitleAndBody/WeTextTitleAndBody";

import treeSvg from '../../pictures/tree-illustration.svg';
import phoneSvg from '../../pictures/phone-illustration.svg';
import booksSvg from '../../pictures/tablet-illustration.svg';

const WeSection = props => (
    <div id="weSection">
        <div className="WeSectionTree">
            <CircleAndLine numberString='01'/>
            <div className="WeSectionTreeText">
                <WeTextTitleAndBody
                    title='Мы верим'
                    body='в обучение через разработку коммерческих проектов эффективно для понимания теоретической базы, преподаваемой в вузах'
                    align='right'
                />
            </div>
            <img src={treeSvg} alt="" className='WeSectionSvg'/>
        </div>

        <div className="WeSectionPhone">
            <CircleAndLine numberString='02'/>
            <div className="WeSectionPhoneText">
                <WeTextTitleAndBody
                    title='Мы помогаем'
                    body='бизнесу за короткие сроки и маленький бюджет получить ПО для улучшения своего сервиса'
                    align='left'
                />
            </div>
            <img src={phoneSvg} alt="" className='WeSectionSvg'/>
        </div>

        <div className="WeSectionBooks">
            <CircleAndLine numberString='03'/>
            <div className="WeSectionBooksText">
                <WeTextTitleAndBody
                    title='Мы решаем'
                    body='низкий уровень подготовленности стажера-программиста. (проблему не только одного человека, а целой страны)'
                    align='right'
                />
            </div>
            <img src={booksSvg} alt="" className='WeSectionSvg'/>
        </div>
    </div>

);

export default WeSection;