import { createSelector } from 'reselect';

/**
 * Direct selector to the landingPage state domain
 */
const selectLandingPageDomain = (state) => state.get('landingPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LandingPage
 */

const makeSelectLandingPage = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.toJS()
);

const makeSelectLoadingNews = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('loadingNews')
);

const makeSelectLoadingNewsComplete = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('loadingNewsComplete')
);

const makeSelectLoadingNewsError = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('loadingNewsError')
);

const makeSelectNewsData = () => createSelector(
  selectLandingPageDomain,
  (substate) => substate.get('newsData')
);

export default makeSelectLandingPage;
export {
  selectLandingPageDomain,
  makeSelectLoadingNews,
  makeSelectLoadingNewsError,
  makeSelectLoadingNewsComplete,
  makeSelectNewsData
};
