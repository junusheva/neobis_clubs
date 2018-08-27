import {ABOUT_US_SUCCESS} from "../actions/actions";

const initialState = {
    aboutUs: '',
    achievements: '',
    projects: ''
};

const reducer  = (state = initialState, action) => {
    switch(action.type) {
        case ABOUT_US_SUCCESS:
            return {...state, aboutUs: action.aboutUs};
        default :
            return state;
    }
};

export default reducer;