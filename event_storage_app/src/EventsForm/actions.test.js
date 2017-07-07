/* eslint-disable no-undef */
import moment from 'moment';
import { updateDate, resetForm, updateName, updateSurname, updateEmail, submitForm } from './actions';
import { UPDATE_DATE, UPDATE_EMAIL, UPDATE_NAME, UPDATE_SURNAME, SUBMIT_FORM, RESET_FORM } from './constants';

describe('EventsForm actions:', () => {
  describe('updateDate: ', () => {
    it('should return action of type UPDATE_DATE', () => {
      const date = moment();
      const actionResult = updateDate(date);
      expect(actionResult.type).toBe(UPDATE_DATE);
    });

    it('should return action with passed date as a payload', () => {
      const date = moment();
      const actionResult = updateDate(date);
      expect(actionResult.date).toBe(date);
    });
  });

  describe('resetForm: ', () => {
    it('should return action of type UPDATE_DATE', () => {
      const actionResult = resetForm();
      expect(actionResult.type).toBe(RESET_FORM);
    });
  });

  describe('submitForm: ', () => {
    it('should return action of type UPDATE_DATE', () => {
      const actionResult = submitForm();
      expect(actionResult.type).toBe(SUBMIT_FORM);
    });
  });

  describe('updateName: ', () => {
    it('should return action of type UPDATE_NAME', () => {
      const name = 'Test';
      const actionResult = updateName(name);
      expect(actionResult.type).toBe(UPDATE_NAME);
    });

    it('should return action with passed name as a payload', () => {
      const name = 'Test';
      const actionResult = updateName(name);
      expect(actionResult.name).toBe(name);
    });
  });

  describe('updateEmail: ', () => {
    it('should return action of type UPDATE_EMAIL', () => {
      const email = 'test@test.pl';
      const actionResult = updateEmail(email);
      expect(actionResult.type).toBe(UPDATE_EMAIL);
    });

    it('should return action with passed email as a payload', () => {
      const email = 'test@test.pl';
      const actionResult = updateEmail(email);
      expect(actionResult.email).toBe(email);
    });
  });

  describe('updateSurname: ', () => {
    it('should return action of type UPDATE_SURNAME', () => {
      const surname = 'Test';
      const actionResult = updateSurname(surname);
      expect(actionResult.type).toBe(UPDATE_SURNAME);
    });

    it('should return action with passed surname as a payload', () => {
      const surname = 'Test';
      const actionResult = updateSurname(surname);
      expect(actionResult.surname).toBe(surname);
    });
  });
});
