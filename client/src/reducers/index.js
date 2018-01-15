import { combineReducers } from 'redux';
import authReducers from './authReducers';
import { reducer as reduxForm } from 'redux-form';
import surveysReducer from './surveysReducer';
export default combineReducers({
 auth: authReducers,
 form: reduxForm,
 surveys: surveysReducer
});
