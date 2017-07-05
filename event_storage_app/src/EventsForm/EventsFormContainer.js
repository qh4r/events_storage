/* eslint-disable import/first */
import React from 'react';
import { connect } from 'react-redux';
import { polyfill } from 'es6-promise';
polyfill();
import 'isomorphic-fetch';
import { EventsFormComponent } from './EventsFormComponent';
import * as actions from './actions';
import { eventsFormSelector } from './selectors';

const EventsFormContainer = props => (
  <div>
    <EventsFormComponent {...props} />
  </div>
);

const EventsForm = connect(eventsFormSelector, actions)(EventsFormContainer);

export {
  EventsForm,
};
