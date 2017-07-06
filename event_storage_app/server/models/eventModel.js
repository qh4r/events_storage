import mongoose from 'mongoose';
import { validate as validateEmail } from 'email-validator';
import moment from 'moment';
const stringValidator = [
  value => value && (value.trim().length > 0),
  '{PATH} can not be empty',
];

const emailValidator = [
  value => validateEmail(value),
  'email must be valid',
];

const dateValidator = [
  (value) => {
    try {
      const date = moment(value);
      return date.isValid();
    } catch (e) {
      return false;
    }
  },
  'date must be present and valid',
];

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: stringValidator,
  },
  surname: {
    type: String,
    required: true,
    validate: stringValidator,
  },
  email: {
    type: String,
    required: true,
    validate: emailValidator,
  },
  date: {
    type: Date,
    required: true,
    validate: dateValidator,
  },
});

const EventModel = mongoose.model('Event', eventSchema);

export {
  EventModel,
};
