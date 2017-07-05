function eventsController(EventsModel) {
  const getEvents = async (req, res) => {
    try {
      const query = EventsModel.find();
      const result = await query.exec();
      return res.status(200).send(result);
    } catch (e) {
      return res.status(422).send({
        message: e.message,
      });
    }
  };

  const postEvent = async (req, res) => {
    try {
      const { name, surname, date, email } = req.body;
      const newEvent = new EventsModel({
        name,
        surname,
        date,
        email,
      });
      await newEvent.save();
      return res.sendStatus(201);
    } catch (e) {
      return res.status(422).send({
        message: e.message,
      });
    }
  };

  return {
    getEvents,
    postEvent,
  };
}

export {
  eventsController,
};
