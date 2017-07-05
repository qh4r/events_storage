/* eslint-disable import/first */
import { takeEvery, call, put } from 'redux-saga/effects';
import { polyfill } from 'es6-promise';
polyfill();
import 'babel-polyfill';
import 'isomorphic-fetch';
import { FETCH_LIST_DATA } from './constants';
import { fetchListDataSuccess } from './actions';

function fetchListRequest() {
  return fetch('/api/events',
    {
      method: 'GET',
    });
}

const unwrapPromise = x => Promise.resolve(x);

function* fetchEventsList() {
  try {
    const callResult = yield call(fetchListRequest);
    const eventsList = yield call(unwrapPromise, callResult.json());
    yield put(fetchListDataSuccess(eventsList));
  } catch (e) {
    console.log('err', e);
  }
}

function* fetchEventsListSaga() {
  yield takeEvery(FETCH_LIST_DATA, fetchEventsList);
}

export default [
  fetchEventsListSaga,
];
