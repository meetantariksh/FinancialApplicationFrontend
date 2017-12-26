/*
 *
 * RegistrationContainer reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  RESET_CHECK_EMAIL,
  CHECK_EMAIL,
  CHECK_EMAIL_COMPLETE,
  CHECK_EMAIL_ERROR
} from './constants';

const initialState = fromJS({
  checkEmail: false,
  checkEmailComplete: false,
  checkEmailError: false,
  profileData: '',
});

function registrationContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHECK_EMAIL: 
      return state
        .set('checkEmail', true)
        .set('checkEmailComplete', false)
        .set('checkEmailError', false);
    case CHECK_EMAIL_COMPLETE: 
      return state
        .set('checkEmail', false)
        .set('checkEmailComplete', true)
        .set('checkEmailError', false)
        .set('profileData', action.profileData); 
    case RESET_CHECK_EMAIL: 
      return state
        .set('checkEmail', false)
        .set('checkEmailComplete', false)
        .set('checkEmailError', true);
    case RESET_CHECK_EMAIL: 
      return state
        .set('checkEmail', false)
        .set('checkEmailComplete', false)
        .set('checkEmailError', false);
    default:
      return state;
  }
}

export default registrationContainerReducer;
