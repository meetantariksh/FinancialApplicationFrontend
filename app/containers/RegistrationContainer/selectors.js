import { createSelector } from 'reselect';

const selectRegistrationContainerDomain = (state) => state.get('registrationContainer');

const makeSelectRegistrationContainer = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => substate.toJS()
);

const makeSelectCheckEmail = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => substate.get('checkEmail')
);

const makeSelectCheckEmailComplete = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => substate.get('checkEmailComplete')
);

const makeSelectCheckEmailError = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => substate.get('checkEmailError')
);

const makeSelectProfileData = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => (!substate.get('profileData') || substate.get('profileData') === '') ? '':JSON.parse(substate.get('profileData'))
);

const makeSelectIsUserRegistered = () => createSelector(
  selectRegistrationContainerDomain,
  (substate) => (!substate.get('profileData') || substate.get('profileData') === '') ? false : JSON.parse(substate.get('profileData')).userRegistered
);

export default makeSelectRegistrationContainer;
export {
  selectRegistrationContainerDomain,
  makeSelectCheckEmail,
  makeSelectCheckEmailComplete,
  makeSelectCheckEmailError,
  makeSelectProfileData,
  makeSelectIsUserRegistered
};
