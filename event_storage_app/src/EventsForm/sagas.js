/* eslint-disable import/first */
import { take, select, call, put } from 'redux-saga/effects';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch';
import { SUBMIT_FORM } from './constants';
import { resetForm } from './actions';
import { eventsFormSelector } from './selectors';
import { showPopup } from '../Popup';

export function makePostRequest(formData) {
  return fetch('/api/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      ...formData,
      date: formData.date.toDate(),
    }),
  });
}

export function unwrapPromise(value) {
  return Promise.resolve(value);
}

function* formPostSaga() {
  while (true) {
    yield take(SUBMIT_FORM);
    const formData = yield select(eventsFormSelector);
    try {
      const result = yield call(makePostRequest, formData);
      if (!result.ok) {
        throw result;
      }
      yield put(resetForm());
      yield put(showPopup(false, 'Event registered!'));
    } catch (e) {
      const err = yield call(unwrapPromise, e.json());
      yield put(showPopup(true, err.message));
    }
  }
}

export default[
  formPostSaga,
];
