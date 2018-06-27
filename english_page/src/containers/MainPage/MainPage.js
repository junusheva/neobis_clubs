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
                    <WeTeachSection/>
                    <Technologies/>
                    <div className="container">
                        <div className="circleAndLineContainer">
                            <div className="circle"><p>01</p></div>
                            <div className="justDashedLine"/>
                        </div>

                    </div>

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
