
import { fromJS } from 'immutable';
import registrationContainerReducer from '../reducer';

describe('registrationContainerReducer', () => {
  it('returns the initial state', () => {
    expect(registrationContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
