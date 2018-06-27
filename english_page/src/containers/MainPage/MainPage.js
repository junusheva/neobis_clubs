import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";

import {fetchSiteInfo} from "../../store/actions/siteInfo";
import './test.css';

import Grider from "../../components/UI/Grider/Grider";
import Ellipses from "../../components/BigLogoSection/Ellipses/Ellipses";
import NavBar from "../../components/UI/NavBar/NavBar";
import AboutUsIntro from "../../components/AboutUs/AboutUsIntro/AboutUsIntro";
import OurSection from "../../components/AboutUs/OurSection/OurSection";
import WeTeachSection from "../../components/WeTeachSection/WeTeachSection";
import Technologies from "../../components/Technologies/Technologies";
import DownArrow from "../../components/UI/DownArrow/DownArrow";
import WeSection from "../../components/WeSection/WeSection";
import treeSvg from '../../pictures/tree-illustration.svg';



class MainPage extends Component {

    componentDidMount () {
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
                    {/*<WeSection*/}
                    {/*number='01'*/}
                    {/*title='Мы верим'*/}
                    {/*body='в обучение через разработку коммерческих проектов эффективно для понимания теоретической базы, преподаваемой в вузах'*/}
                    {/*align='right'*/}
                    {/*/>*/}

                    <div className="container">
                        <div className="circleAndLineContainer">
                            <div className="circle"><p>01</p></div>
                            <div className="justDashedLine"/>
                        </div>
                        <div className="WeTextContainer">
                            <p className="WeTextContainerTitle">Мы верим</p>
                            <p className="WeTextContainerBody">
                                в обучение через разработку коммерческих проектов эффективно для понимания теоретической базы, преподаваемой в вузах
                            </p>
                        </div>
                        <img src={treeSvg} alt="" className='WeSectionSvg'/>
                    </div>
                    
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
