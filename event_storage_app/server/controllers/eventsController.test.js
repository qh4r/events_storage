/* eslint-disable no-underscore-dangle,no-undef */
import { eventsController } from './eventsController';

class MockResponse {
  status(x) {
    this._status = x;
    return this;
  }

  send(x) {
    this._result = x;
  }

  sendStatus(x) {
    this._status = x;
  }
}

class MockSchemaFactory {
  constructor({ name, surname, email, date }) {
    this.allPassed = ![name, surname, email, date].some(x => !x);
  }

  save() {
    return new Promise((res, rej) => (this.allPassed ? res() : rej(new Error('should fail'))));
  }
}

describe('Controllers: ', () => {
  describe('getEvents: ', () => {
    it('Should return 200 if no errors were encountered', async () => {
      const mockSchema = {
        find: () => ({
          exec: () => Promise.resolve('test data'),
        }),
      };
      const controllerInstance = eventsController(mockSchema);
      const res = new MockResponse();
      await controllerInstance.getEvents(null, res);
      expect(res._status).toEqual(200);
      expect(res._result).toEqual('test data');
    });

    it('Should return 422 on db failure', async () => {
      const mockSchema = {
        find: () => ({
          exec: () => Promise.reject(new Error('it should fail')),
        }),
      };
      const controllerInstance = eventsController(mockSchema);
      const res = new MockResponse();
      await controllerInstance.getEvents(null, res);
      expect(res._status).toEqual(422);
      expect(res._result).toEqual({ message: 'it should fail' });
    });
  });

  describe('getEvents: ', () => {
    it('Should return 201 if all required fields were passed and valid', async () => {
      const controllerInstance = eventsController(MockSchemaFactory);
      const res = new MockResponse();
      const req = {
        body: {
          name: 'Test',
          surname: 'Test',
          email: 'test@test.pl',
          date: '01/01/2017',
        },
      };
      await controllerInstance.postEvent(req, res);
      expect(res._status).toEqual(201);
    });

    it('Should return 422 if there were validation errors', async () => {
      const controllerInstance = eventsController(MockSchemaFactory);
      const res = new MockResponse();
      const req = {
        body: {
          name: 'Test',
          surname: 'Test',
          email: '',
          date: '01/01/2017',
        },
      };
      await controllerInstance.postEvent(req, res);
      expect(res._status).toEqual(422);
      expect(res._result).toEqual({ message: 'should fail' });
    });
  });
});

