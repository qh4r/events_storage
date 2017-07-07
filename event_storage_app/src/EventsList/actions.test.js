/* eslint-disable no-undef */
import { fetchListData, fetchListDataError, fetchListDataSuccess } from './actions';
import { FETCH_LIST_DATA_SUCCESS, FETCH_LIST_DATA_ERROR, FETCH_LIST_DATA } from './constants';

describe('EventsList actions:', () => {
  describe('fetchListDataSuccess: ', () => {
    it('should return action of type FETCH_LIST_DATA_SUCCESS', () => {
      const list = [1, 2, 3];
      const actionResult = fetchListDataSuccess(list);
      expect(actionResult.type).toBe(FETCH_LIST_DATA_SUCCESS);
    });

    it('should return action with passed date as a payload', () => {
      const list = [1, 2, 3];
      const actionResult = fetchListDataSuccess(list);
      expect(actionResult.eventsList).toBe(list);
    });
  });

  describe('fetchListDataError: ', () => {
    it('should return action of type FETCH_LIST_DATA_ERROR', () => {
      const actionResult = fetchListDataError();
      expect(actionResult.type).toBe(FETCH_LIST_DATA_ERROR);
    });
  });

  describe('fetchListData: ', () => {
    it('should return action of type FETCH_LIST_DATA', () => {
      const actionResult = fetchListData();
      expect(actionResult.type).toBe(FETCH_LIST_DATA);
    });
  });
});
