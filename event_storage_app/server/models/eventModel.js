import mongoose from 'mongoose';
import { stringValidator, emailValidator, dateValidator } from './validators/validators';

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: stringValidator('Please provide valid name.'),
  },
  surname: {
    type: String,
    required: true,
    validate: stringValidator('Please provide valid surname.'),
  },
  email: {
    type: String,
    required: true,
    validate: emailValidator('Please provide valid email.'),
  },
  date: {
    type: Date,
    required: true,
    validate: dateValidator('Please select valid date.'),
  },
});

const EventModel = mongoose.model('Event', eventSchema);

export {
  EventModel,
};
