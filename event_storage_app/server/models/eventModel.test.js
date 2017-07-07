/* eslint-disable no-undef */
import { EventModel } from './eventModel';
describe('Model: ', () => {
  it('Should pass validation if data passed is right', () => {
    const modelInstance = new EventModel({
      name: 'Test',
      surname: 'Test',
      email: 'test@test.pl',
      date: Date.now(),
    });
    modelInstance.validate((err) => {
      expect(err).toBe(null);
    });
  });

  it('Should fail validation if data passed is flawed', () => {
    const modelInstance = new EventModel({
      name: 'Test',
      surname: 'Test',
      email: 'testtest.pl',
      date: Date.now(),
    });
    modelInstance.validate((err) => {
      expect(err.errors.email).toBeDefined();
    });
  });
});
