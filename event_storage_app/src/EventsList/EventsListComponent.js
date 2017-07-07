/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { ListContainer } from './fragments/ListContainer';
import { EventListItem } from './fragments/EventListItemComponent';

const EventsListComponent = ({ events }) => (
  <ListContainer id="list-page">
    {events.map(event =>
      <EventListItem key={event._id} {...event} />)}
  </ListContainer>
);

EventsListComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
};

EventsListComponent.defaultProps = {
  events: [],
};

export {
  EventsListComponent,
};
