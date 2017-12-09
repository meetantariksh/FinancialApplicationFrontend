/*
 *
 * LandingPage reducer
 *
 */

import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
  LOAD_NEWS,
  LOAD_NEWS_COMPLETE,
  LOAD_NEWS_ERROR
} from './constants';

const initialState = fromJS({
  loadingNews: false,
  loadingNewsComplete: false,
  loadingNewsError: false,
  newsData: ''
});

function landingPageReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case LOAD_NEWS:
      return state
        .set('loadingNews', true)
        .set('loadingNewsComplete', false)
        .set('loadingNewsError', false);
    case LOAD_NEWS_COMPLETE:
      return state
        .set('loadingNews', false)
        .set('loadingNewsComplete', true)
        .set('loadingNewsError', false)
        .set('newsData', action.newsData);
    case LOAD_NEWS_ERROR:
      return state
        .set('loadingNews', false)
        .set('loadingNewsComplete', false)
        .set('loadingNewsError', true);
    default:
      return state;
  }
}

export default landingPageReducer;
