import React from 'react';
import './AboutUsIntro.css';
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import SectionText from "../../UI/SectionText/SectionText";

const AboutUsIntro = props => (
    <div className="AboutUsIntro" id='aboutUs'>
        <SectionTitle title='Кто мы?'/>
        <SectionText textWidth='550px'>
            Цель нашего клуба – познакомить студентов с программированием и пробудить интерес к специальности. Программист – это перспективная: интересная профессия и высокая зарплата. Проект был запущен год назад. На сегодня обучено более 30 студентов из 10 стран. В Neobis мы стараемся сделать так, чтобы ребятам было прежде всего интересно программировать, при этом знания и навыки мы даем настоящие.
        </SectionText>
    </div>
);

export default AboutUsIntro;