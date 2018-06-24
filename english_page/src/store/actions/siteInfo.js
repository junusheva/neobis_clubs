import axios from 'axios';
import {ABOUT_US_SUCCESS} from "./actions";

const aboutUsSuccess = aboutUs => ({type: ABOUT_US_SUCCESS, aboutUs});

export const fetchSiteInfo = () => {
    return dispatch => {
        axios.get('/about_us').then(result => {
            console.log(result.data);
            dispatch(aboutUsSuccess(result.data));
        })
            // TODO
            // .then(() => {
            // axios.get('/pro')
            // })
    }
}