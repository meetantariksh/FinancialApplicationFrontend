/*
 *
 * RegistrationContainer actions
 *
 */

import {
  DEFAULT_ACTION,
  CHECK_EMAIL,
  CHECK_EMAIL_COMPLETE,
  CHECK_EMAIL_ERROR,
  RESET_CHECK_EMAIL
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function checkEmail(email) {
  return {
    type: CHECK_EMAIL,
    email
  };
}

export function checkEmailComplete(profileData) {
  return {
    type: CHECK_EMAIL_COMPLETE,
    profileData
  };
}

export function checkEmailError() {
  return {
    type: CHECK_EMAIL_ERROR,
  };
}

export function checkEmailReset() {
  return {
    type: RESET_CHECK_EMAIL,
  };
}
