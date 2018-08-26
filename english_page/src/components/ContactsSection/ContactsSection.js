import React from 'react';
import './ContactsSection.css';
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ScrollAnimation from 'react-animate-on-scroll';


const ContactsSection = props => {
    const contacts = props.contacts ? props.contacts : []
    return (
        <ScrollAnimation animateIn='bounceInUp'
                         animateOut='bounceOutDown'>
        <div className="ContactsSection">
            <div className="ContactsData">
                <SectionTitle title={'Контакты'}/>
                <div className="ContactItem">
                    <i className="fas fa-map-marker-alt"/>
                    <p>American University of Central Asia
                        7/6 Aaly Tokombaev Street Bishkek,
                        Kyrgyz Republic 720060</p>
                </div>
                <div className="ContactItem">
                    <i className="fas fa-envelope"/>
                    <p>neobiskg@gmail.com</p>
                </div>
                <div className="ContactItem">
                    <i className="fas fa-phone"/>
                    <div>
                        <p>+996(550)225310 - Sanira</p>
                        <p>+996(773)090203 - Begimai</p>
                    </div>
                </div>
            </div>
        </div>
        </ScrollAnimation>
    );
}

export default ContactsSection;