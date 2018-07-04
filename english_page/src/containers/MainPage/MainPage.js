import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchSiteInfo} from "../../store/actions/siteInfo";

import Grider from "../../components/UI/Grider/Grider";
import Ellipses from "../../components/BigLogoSection/Ellipses/Ellipses";
import NavBar from "../../components/UI/NavBar/NavBar";
import AboutUsIntro from "../../components/AboutUs/AboutUsIntro/AboutUsIntro";
import OurSection from "../../components/AboutUs/OurSection/OurSection";
import WeTeachSection from "../../components/WeTeachSection/WeTeachSection";
import Technologies from "../../components/Technologies/Technologies";
import DownArrow from "../../components/UI/DownArrow/DownArrow";
import WeSection from "../../components/WeSection/WeSection";

import './test.css';
import SectionTitle from "../../components/UI/SectionTitle/SectionTitle";
import SectionText from "../../components/UI/SectionText/SectionText";
import NeobisInNumbers from "../../components/NeobisInNumbers/NeobisInNumbers";
import Step from "../../components/StepsSection/Step/Step";

import svg from './gears.svg';

class MainPage extends Component {

    componentDidMount() {
        this.props.fetchSiteInfo();
        console.log(this.props.aboutUsSection);
    }

    render() {
        return (
            <Fragment>
                <Ellipses/>
                <NavBar/>
                <Grider>
                    <AboutUsIntro/>
                    <DownArrow/>
                    <OurSection/>
                    <WeSection/>
                </Grider>

                <div className="BigGreyCircleContainer">
                    <div className="BigGreyCircle">
                        <SectionTitle title='Этапы обучения в Neobis'/>
                        <SectionText textWidth='39%'>
                            Мы учим современным, полноценным языкам программирования, которые используются везде. Студенты могут применить свои теоретические знания  на практике под присмотром опытного наставника.
                        </SectionText>
                        <DownArrow/>
                        <div className="StepsSection">
                            <div className="StepsSectionContainer">
                                <Step
                                    title='Старт'
                                    number='1'
                                    svg={svg}
                                >
                                    Выбирай направление и обучайся под руководством опытных менторов
                                </Step>
                                <Step
                                    title='Проекты'
                                    number='2'
                                    svg={svg}
                                >
                                    Разработай несколько реальных коммерческих проектов и получи бесценный опыт работы в команде
                                </Step>
                                <Step
                                    title='Менторство'
                                    number='3'
                                    svg={svg}
                                >
                                    Обучай других новичков и работай в основной команде Neobis
                                </Step>
                            </div>
                        </div>
                        <NeobisInNumbers numbers={this.props.aboutUsSection.stats}/>
                    </div>
                </div>

                <Grider>
                    <WeTeachSection/>
                    <Technologies/>
                </Grider>
            </Fragment>

        );
    }
}

const mapStateToProps = state => ({
    aboutUsSection: state.siteInfo.aboutUs
});

const mapDispatchToProps = dispatch => ({
    fetchSiteInfo: () => dispatch(fetchSiteInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
