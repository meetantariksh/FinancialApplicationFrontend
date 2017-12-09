/*
 *
 * LandingPage actions
 *
 */

import {
  DEFAULT_ACTION,
  LOAD_NEWS,
  LOAD_NEWS_COMPLETE,
  LOAD_NEWS_ERROR
} from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}

export function loadNews() {
  return {
    type: LOAD_NEWS,
  };
}

export function loadNewsComplete(newsData) {
  return {
    type: LOAD_NEWS_COMPLETE,
    newsData
  };
}

export function loadNewsError() {
  return {
    type: LOAD_NEWS_ERROR,
  };
}
