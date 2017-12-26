import { takeLatest, call, put, select } from 'redux-saga/effects';

import{
  requestPostAPIData
} from '../../utils/requestAPIData';

import{
  CHECK_EMAIL
} from './constants';
import{
  checkEmailComplete,
  checkEmailError,
} from './actions';

export function* checkEmail({email}){
  console.log(email);
  const apiUrl = 'http://localhost:8080/registration/verifyGeneralUserRegistration';
  try {
    let profileData = yield call(requestPostAPIData, apiUrl, {'email': email});
    yield put(checkEmailComplete(profileData));
  } catch (err) {
    console.log(err);
    yield put(checkEmailError());
  }
}

export default function* registrationSaga() {
  yield takeLatest(CHECK_EMAIL, checkEmail);
}
