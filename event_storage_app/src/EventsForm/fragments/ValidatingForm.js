import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorTracker {
  constructor() {
    this.errors = {};
    this.validationCallbacks = [];
  }

  getErrorByKey = key => this.errors[key];

  setError = (key, message) => {
    this.errors[key] = message;
  }

  performValidation() {
    this.validationCallbacks.forEach(validate => validate());
  }

  clearErrors = () => {
    this.errors = Object.keys(this.errors).map(key => ({ [key]: '' }));
  }

  checkErrors = () => Object.keys(this.errors).some(key => this.errors[key]);

  subscribe = (validatorAction) => {
    this.validationCallbacks.push(validatorAction);
  }
}

class ValidatingForm extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(React.PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    onSubmit: PropTypes.func.isRequired,
    onReset: PropTypes.func.isRequired,
  };

  static childContextTypes = {
    errorTracker: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.errorTracker = new ErrorTracker();
  }

  getChildContext() {
    return { errorTracker: this.errorTracker };
  }

  onReset = () => {
    this.errorTracker.clearErrors();
    this.forceUpdate();
    this.props.onReset();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.validateForm();
    if (this.checkErrors()) {
      this.forceUpdate();
    } else {
      this.props.onSubmit();
    }
  };

  validateForm = () => {
    this.errorTracker.performValidation();
  };

  checkErrors = () => this.errorTracker.checkErrors();

  render() {
    return (
      <form onSubmit={this.onSubmit} onReset={this.onReset}>
        {this.props.children}
      </form>
    );
  }
}

export {
  ValidatingForm,
};
