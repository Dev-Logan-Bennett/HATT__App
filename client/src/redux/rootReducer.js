import {
  combineReducers,
} from 'redux';
import authenticationReducer from './authentication';
import registrationReducer from './registration';

export default combineReducers({
  auth: authenticationReducer,
  reg: registrationReducer,
});
