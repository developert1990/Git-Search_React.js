import { combineReducers } from 'redux';
import { loginReducer } from './fetchlogin';

export default combineReducers({
    loginStore: loginReducer,
})