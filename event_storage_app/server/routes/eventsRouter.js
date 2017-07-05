import express from 'express';

function eventsRouter(controller) {
  const router = express.Router();

  router.route('/events')
    .get(controller.getEvents)
    .post(controller.postEvent);

  return router;
}

export {
  eventsRouter,
};
