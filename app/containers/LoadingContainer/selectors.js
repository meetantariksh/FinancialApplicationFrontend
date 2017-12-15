import { createSelector } from 'reselect';

/**
 * Direct selector to the loadingContainer state domain
 */
const selectLoadingContainerDomain = (state) => state.get('loadingContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by LoadingContainer
 */

const makeSelectLoadingContainer = () => createSelector(
  selectLoadingContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectLoadingContainer;
export {
  selectLoadingContainerDomain,
};
