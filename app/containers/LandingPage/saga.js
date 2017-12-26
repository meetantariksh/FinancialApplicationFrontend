import { takeLatest, call, put, select } from 'redux-saga/effects';

import{
  LOAD_NEWS
} from './constants';
import{
  loadNewsComplete,
  loadNewsError
} from './actions';

import{
  requestGetAPIData
} from '../../utils/requestAPIData';

export function* loadNewsHeadLines(){
  const apiUrl = 'http://localhost:8080/getNewsHeadlines';
  try {
    let newsHeadLines = yield call(requestGetAPIData, apiUrl);
    yield put(loadNewsComplete(newsHeadLines));
  } catch (err) {
    console.log(err);
    yield put(loadNewsError());
  }
}

export default function* landingPageSaga() {
  yield takeLatest(LOAD_NEWS, loadNewsHeadLines);
}
