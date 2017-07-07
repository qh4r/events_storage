/* eslint-disable no-undef */
import moment from 'moment';
import { fromJS } from 'immutable';
import { formData } from './reducers';
import { resetForm, updateName, updateSurname, updateEmail, updateDate } from './actions';


const startFormState = fromJS({
  name: 'Test',
  surname: 'Test',
  email: 'test@test.pl',
  date: moment('2017-07-07T08:55:18.104Z'),
});


describe('EventsForm actions:', () => {
  describe('formData reducer: ', () => {
    it('should return same state on unrecognised action', () => {
      const resultState = formData(startFormState, { type: 'I_COMMAND_THEE' });
      expect(resultState === startFormState).toBe(true);
      expect(resultState.toJS()).toEqual(startFormState.toJS());
    });

    it('on name update should return state with only name changed', () => {
      const newValue = 'Changed';
      const expected = fromJS({
        name: newValue,
        surname: 'Test',
        email: 'test@test.pl',
        date: moment('2017-07-07T08:55:18.104Z'),
      });

      const resultState = formData(startFormState, updateName(newValue));
      expect(resultState === startFormState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });

    it('on updateSurname should return state with only surname changed', () => {
      const newValue = 'Changed';
      const expected = fromJS({
        name: 'Test',
        surname: newValue,
        email: 'test@test.pl',
        date: moment('2017-07-07T08:55:18.104Z'),
      });

      const resultState = formData(startFormState, updateSurname(newValue));
      expect(resultState === startFormState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });

    it('on updateEmail should return state with only email changed', () => {
      const newValue = 'changed@changed.pl';
      const expected = fromJS({
        name: 'Test',
        surname: 'Test',
        email: newValue,
        date: moment('2017-07-07T08:55:18.104Z'),
      });

      const resultState = formData(startFormState, updateEmail(newValue));
      expect(resultState === startFormState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });

    it('on updateDate should return state with only date changed', () => {
      const newValue = moment('2017-07-08T08:000:00.000Z');
      const expected = fromJS({
        name: 'Test',
        surname: 'Test',
        email: 'test@test.pl',
        date: newValue,
      });

      const resultState = formData(startFormState, updateDate(newValue));
      expect(resultState === startFormState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });

    it('on resetForm should return state with empty values', () => {
      const expected = fromJS({
        name: '',
        surname: '',
        email: '',
        date: null,
      });

      const resultState = formData(startFormState, resetForm());
      expect(resultState === startFormState).toBe(false);
      expect(resultState.toJS()).toEqual(expected.toJS());
    });
  });
});
