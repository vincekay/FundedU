import { GET_ERRORS } from '../constants'
import { LOCATION_CHANGE } from 'react-router-redux';

const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return action.payload;
        case LOCATION_CHANGE: 
            return {};
        
        default:
            return state;
    }
}

export default errorReducer;