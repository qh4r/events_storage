import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from './actions';
import { NavigationComponent } from './NavigationComponent';
import { navigationSelector } from './selectors';

class NavigationContainer extends Component {
  static propTypes = {
    goToList: PropTypes.func.isRequired,
    goToForm: PropTypes.func.isRequired,
  }

  componentWillMount() {

  }

  render() {
    return (
      <NavigationComponent
        {...this.props}
        goToList={() => this.props.goToList()}
        goToForm={() => this.props.goToForm()}
      />
    );
  }
}

const Navigation = connect(navigationSelector, actions)(NavigationContainer);

export {
  Navigation,
};
