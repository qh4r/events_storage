import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { NAVIGATE_TO_FORM, NAVIGATE_TO_LIST } from './constants';


export function* navigateToList() {
  yield put(push('/list'));
}

export function* navigateToForm() {
  yield put(push('/'));
}

export function* goToListSaga() {
  yield takeLatest(NAVIGATE_TO_LIST, navigateToList);
}

export function* goToFormSaga() {
  yield takeLatest(NAVIGATE_TO_FORM, navigateToForm);
}

export default [
  goToListSaga,
  goToFormSaga,
];
