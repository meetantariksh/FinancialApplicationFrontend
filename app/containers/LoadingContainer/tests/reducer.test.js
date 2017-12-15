
import { fromJS } from 'immutable';
import loadingContainerReducer from '../reducer';

describe('loadingContainerReducer', () => {
  it('returns the initial state', () => {
    expect(loadingContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
