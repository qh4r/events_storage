import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../shared/mediaMixins';

const GroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const GroupHeader = styled.label`
  display: none;
  ${media.sm`
    display: block
  `}
`;

const ErrorMessage = styled.p`
  margin: 5px 10px 10px 20px;
  color: ${props => props.theme.input.errorColor};
  font-weight: 300;
  font-size: 14px;
`;

class FormGroup extends Component {
  static propTypes = {
    child: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    validator: PropTypes.func,
    dataKey: PropTypes.string.isRequired,
    onFocus: PropTypes.func,
  };

  static defaultProps = {
    validator: null,
    onFocus: null,
  }

  static contextTypes = {
    errorTracker: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.context.errorTracker.setError(this.props.id, '');
    this.context.errorTracker.subscribe(this.executeValidation);
  }

  onFocus = (e) => {
    this.clearErrors();
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  executeValidation = () => {
    const { id, validator, dataKey } = this.props;
    this.context.errorTracker.setError(
      id,
      validator
        ? validator(this.props[dataKey])
        : '',
    );
  };

  clearErrors = () => {
    this.context.errorTracker.setError(this.props.id, '');
    this.forceUpdate();
  };

  render() {
    const { id, placeholder, child } = this.props;
    const error = this.context.errorTracker.getErrorByKey(id);
    return (
      <GroupWrapper>
        <GroupHeader for={id}>{placeholder}</GroupHeader>
        {React.createElement(child, {
          ...this.props,
          error,
          onFocus: this.onFocus,
        })}
        {error && <ErrorMessage>
          {error}
        </ErrorMessage>}
      </GroupWrapper>
    );
  }
}

export {
  FormGroup,
};
