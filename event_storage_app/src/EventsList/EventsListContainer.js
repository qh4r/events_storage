import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { EventsListComponent } from './EventsListComponent';
import * as actions from './actions';
import { eventsListSelector } from './selectors';

class EventsListContainer extends Component {
  static propTypes = {
    fetchListData: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.fetchListData();
  }

  render() {
    return (
      <EventsListComponent {...this.props} />
    );
  }

}

const EventsList = connect(eventsListSelector, actions)(EventsListContainer);

export {
  EventsList,
};
