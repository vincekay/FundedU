import { CURRENT_USER, ADD_ASSOCIATE, ADD_IMG } from '../constants'
import isEmpty from '../is-empty';

const initialState = {
    isAuthenticated: false,
    user: {}
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload
            }

        case ADD_ASSOCIATE:
            return {
                ...state,
                user: { ...state.user, funding: action.payload.funding }
            };
        case ADD_IMG:
            return {
                ...state,
                user: { ...state.user, img: action.payload.img }
            };
        default:
            return state;
    }
}

export default authReducer;