import {GET_ASSOCIATE, CLEAR_STUDENT} from '../constants/index';

const initialState = []

const associatesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ASSOCIATE:
            let index = state.findIndex(el => el._id === action.payload._id);
            if (index === -1)
                return [...state, action.payload];
            return state;

           

        case CLEAR_STUDENT:
            return action.payload;
            
        default:
            return state;
    }
}

export default associatesReducer;