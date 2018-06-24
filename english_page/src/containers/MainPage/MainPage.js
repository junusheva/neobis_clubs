import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import {fetchSiteInfo} from "../../store/actions/siteInfo";
import Grider from "../../components/Grider/Grider";
import Ellipses from "../../components/BigLogoSection/Ellipses/Ellipses";
import NavBar from "../../components/NavBar/NavBar";



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
