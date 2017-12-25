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
