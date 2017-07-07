/* eslint-disable no-undef */
import { put, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { navigateToForm, navigateToList, goToFormSaga, goToListSaga } from './sagas';
import { NAVIGATE_TO_LIST, NAVIGATE_TO_FORM } from './constants';

describe('Navigation:', () => {
  describe('sagas:', () => {
    it('goToForm should trigger right effects', () => {
      const saga = navigateToForm();
      expect(saga.next().value).toEqual(put(push('/')));
    });

    it('goToFormSaga should trigger right effects', () => {
      const saga = goToFormSaga();
      expect(saga.next().value).toEqual(takeLatest(NAVIGATE_TO_FORM, navigateToForm));
    });

    it('goToList should trigger right effects', () => {
      const saga = navigateToList();
      expect(saga.next().value).toEqual(put(push('/list')));
    });

    it('goToListSaga should trigger right effects', () => {
      const saga = goToListSaga();
      expect(saga.next().value).toEqual(takeLatest(NAVIGATE_TO_LIST, navigateToList));
    });
  });
});
