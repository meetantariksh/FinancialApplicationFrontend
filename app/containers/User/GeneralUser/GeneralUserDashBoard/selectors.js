import { createSelector } from 'reselect';

/**
 * Direct selector to the generalUserDashBoard state domain
 */
const selectGeneralUserDashBoardDomain = (state) => state.get('generalUserDashBoard');

/**
 * Other specific selectors
 */


/**
 * Default selector used by GeneralUserDashBoard
 */

const makeSelectGeneralUserDashBoard = () => createSelector(
  selectGeneralUserDashBoardDomain,
  (substate) => substate.toJS()
);

export default makeSelectGeneralUserDashBoard;
export {
  selectGeneralUserDashBoardDomain,
};
