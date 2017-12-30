
import { fromJS } from 'immutable';
import generalUserDashBoardReducer from '../reducer';

describe('generalUserDashBoardReducer', () => {
  it('returns the initial state', () => {
    expect(generalUserDashBoardReducer(undefined, {})).toEqual(fromJS({}));
  });
});
