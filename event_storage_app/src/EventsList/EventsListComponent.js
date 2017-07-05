/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';

// I know using indexes as keys is bad
const EventsListComponent = ({ events }) => (
  <div>
    <p>LIST</p>
    <ul>
      {events.map(({ name, surname }, i) => <li key={i}>{name} {surname}</li>)}
    </ul>
  </div>
);

EventsListComponent.propTypes = {
  events: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  })),
};

EventsListComponent.defaultProps = {
  events: [],
};

export {
  EventsListComponent,
};
