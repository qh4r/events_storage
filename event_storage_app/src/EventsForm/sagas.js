/* eslint-disable import/first */
import { takeLatest, select, call, put } from 'redux-saga/effects';
import 'babel-polyfill';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch';
import { SUBMIT_FORM } from './constants';
import { resetForm } from './actions';
import { eventsFormSelector } from './selectors';

function makePostRequest(formData) {
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

function unwrapPromise(value) {
  return Promise.resolve(value);
}

function* formPost() {
  const formData = yield select(eventsFormSelector);
  try {
    const result = yield call(makePostRequest, formData);
    if (!result.ok) {
      throw result;
    }
  } catch (e) {
    const err = yield call(unwrapPromise, e.json());
    console.log('err', err);
  } finally {
    yield put(resetForm());
  }
}

function* formPostSaga() {
  yield takeLatest(SUBMIT_FORM, formPost);
}

export default[
  formPostSaga,
];