import { combineReducers } from 'redux';
import errorReducer from './errorsReducer';
import authReducer from './authReducer';
import associatesReducer from './associatesReducer';

const rootReducer = combineReducers({
    errors: errorReducer,
    auth: authReducer,
    associates: associatesReducer
});

export default rootReducer;