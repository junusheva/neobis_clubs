import React, {Component} from 'react';
import {connect} from "react-redux";
import {fetchSiteInfo} from "../../store/actions/siteInfo";
import Grider from "../../components/Grider/Grider";

class App extends Component {

    componentDidMount () {
        this.props.fetchSiteInfo();
        console.log(this.props.aboutUsSection);
    }

    render() {
        return (
            <Grider>

            </Grider>
        );
    }
}

const mapStateToProps = state => ({
    aboutUsSection: state.siteInfo.aboutUs
});

const mapDispatchToProps = dispatch => ({
    fetchSiteInfo: () => dispatch(fetchSiteInfo())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
