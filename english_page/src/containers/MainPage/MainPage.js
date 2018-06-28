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
import CircleAndLine from "../../components/WeSection/CircleAndLine/CircleAndLine";
import WeTextTitleAndBody from "../../components/WeSection/WeTextTitleAndBody/WeTextTitleAndBody";

import treeSvg from '../../pictures/tree-illustration.svg';
import phoneSvg from '../../pictures/phone-illustration.svg';


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
                    {/*svg={treeSvg}*/}
                    {/*/>*/}
                    {/*<WeSection*/}
                        {/*number='02'*/}
                        {/*title='Мы помогаем'*/}
                        {/*body='бизнесу за короткие сроки и маленький бюджет получить ПО для улучшения своего сервиса'*/}
                        {/*align='left'*/}
                        {/*svg={treeSvg}*/}
                    {/*/>*/}
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
