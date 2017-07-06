/* eslint-disable import/first */
import { take, call, put } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
polyfill();
import 'babel-polyfill';
import 'isomorphic-fetch';
import { FETCH_LIST_DATA } from './constants';
import { fetchListDataSuccess } from './actions';
import moment from 'moment';
import { showPopup } from '../Popup';

function fetchListRequest() {
  return fetch('/api/events',
    {
      method: 'GET',
    });
}

const unwrapPromise = x => Promise.resolve(x);

const momentifyDate = event =>
  ({ ...event, date: moment(event.date).format('MM/DD/YYYY') });

function* fetchEventsListSaga() {
  while (true) {
    yield take(FETCH_LIST_DATA);
    try {
      const callResult = yield call(fetchListRequest);
      const eventsList = yield call(unwrapPromise, callResult.json());
      yield put(fetchListDataSuccess(eventsList.map(momentifyDate)));
    } catch (e) {
      yield put(showPopup(true, 'Failed fetching the list'));
    }
  }
}

export default [
  fetchEventsListSaga,
];
