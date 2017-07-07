/* eslint-disable no-undef */
import { fromJS } from 'immutable';
import { eventsList } from './reducers';
import { fetchListDataSuccess } from './actions';


const defaultState = fromJS(
  [],
);


describe('EventsList:', () => {
  describe('eventsList reducer: ', () => {
    it('should return same state on unrecognised action', () => {
      const resultState = eventsList(defaultState, { type: 'I_COMMAND_THEE' });
      expect(resultState === defaultState).toBe(true);
      expect(resultState.toJS()).toEqual(defaultState.toJS());
    });

    it('on fetch success should return state containing new list', () => {
      const expected = fromJS([
        1, 2, 3, 4,
      ]);

      const resultState = eventsList(defaultState, fetchListDataSuccess(expected));
      expect(resultState === defaultState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });
  });
});
