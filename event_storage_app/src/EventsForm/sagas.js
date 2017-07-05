import { takeLatest, select, call, put } from 'redux-saga/effects';
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
    const msg = yield call(unwrapPromise, result.json());
    console.log('ok', msg);
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
