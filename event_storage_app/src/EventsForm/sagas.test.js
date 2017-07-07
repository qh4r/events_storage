/* eslint-disable no-undef */
import moment from 'moment';
import { take, put, select, call } from 'redux-saga/effects';
import sagas, { makePostRequest, unwrapPromise } from './sagas';
import { resetForm, submitForm } from './actions';
import { SUBMIT_FORM } from './constants';
import { eventsFormSelector } from './selectors';
import logger from '../../config/logger';
import { showPopup } from '../Popup/actions';

const [formPostSaga] = sagas;

const formData = {
  name: 'Test',
  surname: 'Test',
  email: 'test@test.pl',
  date: moment('2017-07-07T08:55:18.104Z'),
};

describe('EventsForm actions:', () => {
  describe('sagas:', () => {
    it('should trigger right effects', () => {
      const saga = formPostSaga();
      expect(saga.next().value).toEqual(take(SUBMIT_FORM));
      expect(saga.next(submitForm()).value).toEqual(select(eventsFormSelector));
      expect(saga.next(formData).value).toEqual(call(makePostRequest, formData));
      const formResult = {
        ok: true,
        json() {
          return formData;
        },
      };
      expect(saga.next(formResult).value).toEqual(put(resetForm()));
      expect(saga.next().value).toEqual(put(showPopup(false, 'Event registered!')));
    });

    it('should throw on api error', () => {
      const saga = formPostSaga();
      expect(saga.next().value).toEqual(take(SUBMIT_FORM));
      expect(saga.next(submitForm()).value).toEqual(select(eventsFormSelector));
      expect(saga.next(formData).value).toEqual(call(makePostRequest, formData));
      const errorObj = {
        message: 'error',
      };
      const formResult = {
        ok: false,
        json() {
          return errorObj;
        },
      };
      expect(saga.next(formResult).value).toEqual(call(unwrapPromise, errorObj));
      expect(saga.next(errorObj).value).toEqual(put(showPopup(true, 'error')));
    });
  });
});
