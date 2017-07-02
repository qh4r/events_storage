import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { NAVIGATE_TO_FORM, NAVIGATE_TO_LIST } from './constants';


function* goToList() {
  yield put(push('/list'));
}

function* goToForm() {
  yield put(push('/'));
}

function* goToListSaga() {
  yield takeLatest(NAVIGATE_TO_LIST, goToList);
}

function* goToFormSaga() {
  yield takeLatest(NAVIGATE_TO_FORM, goToForm);
}

export default [
  goToListSaga,
  goToFormSaga,
];
