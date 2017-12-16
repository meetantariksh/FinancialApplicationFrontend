import { createSelector } from 'reselect';

/**
 * Direct selector to the registrationContainer state domain
 */
const selectRegistrationContainerDomain = (state) => state.get('registrationContainer');

/**
 * Other specific selectors
 */


/**
 * Default selector used by RegistrationContainer
 */

const makeSelectRegistrationContainer = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => substate.toJS()
);

export default makeSelectRegistrationContainer;
export {
  selectRegistrationContainerDomain,
};
