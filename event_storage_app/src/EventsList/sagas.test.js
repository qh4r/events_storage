/* eslint-disable no-undef */
import moment from 'moment';
import { take, put, call } from 'redux-saga/effects';
import sagas, { fetchListRequest, momentifyDate, unwrapPromise } from './sagas';
import { fetchListDataSuccess } from './actions';
import { FETCH_LIST_DATA } from './constants';
import { showPopup } from '../Popup/actions';

const [fetchEventsListSaga] = sagas;

describe('EventsList :', () => {
  describe('sagas:', () => {
    it('should trigger right effects', () => {
      const saga = fetchEventsListSaga();
      expect(saga.next().value).toEqual(take(FETCH_LIST_DATA));
      expect(saga.next().value).toEqual(call(fetchListRequest));
      const callResult = {
        json() {
          return [{
            name: 'test',
            surname: 'test',
            email: 'test@test.pl',
            date: '2017-07-08T08:00:00.000Z',
          }, {
            name: 'test2',
            surname: 'test2',
            email: 'test2@test.pl',
            date: '2017-07-09T08:00:00.000Z',
          }];
        },
      };
      expect(saga.next(callResult).value).toEqual(call(unwrapPromise, callResult.json()));
      expect(saga.next(callResult.json()).value).toEqual(put(fetchListDataSuccess(callResult.json().map(momentifyDate))));
    });

    it('should throw on api error', () => {
      const saga = fetchEventsListSaga();
      expect(saga.next().value).toEqual(take(FETCH_LIST_DATA));
      expect(saga.next().value).toEqual(call(fetchListRequest));
      expect(saga.throw(new Error()).value).toEqual(put(showPopup(true, 'Failed fetching the list')));
    });

    it('momentify should turn valid string into date', () => {
      const event = {
        name: 'test',
        surname: 'test',
        email: 'test@test.pl',
        date: '2017-07-08T08:00:00.000Z',
      };

      const momentEvent = {
        name: 'test',
        surname: 'test',
        email: 'test@test.pl',
        date: moment('2017-07-08T08:00:00.000Z').format('MM/DD/YYYY'),
      };

      const result = momentifyDate(event);
      expect(momentEvent).toEqual(result);
    });
  });
});
