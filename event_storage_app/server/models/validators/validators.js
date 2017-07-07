import { validate as validateEmail } from 'email-validator';
import moment from 'moment';

const stringValidator = msg => [
  value => value && (value.trim().length > 0),
  msg,
];

const emailValidator = msg => [
  value => validateEmail(value),
  msg,
];

const dateValidator = msg => [
  (value) => {
    try {
      const date = moment(value);
      return date.isValid();
    } catch (e) {
      return false;
    }
  },
  msg,
];

export {
  dateValidator,
  emailValidator,
  stringValidator,
};
