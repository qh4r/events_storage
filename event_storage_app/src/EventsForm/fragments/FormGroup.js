import React from 'react';
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

const FormGroup = props => (
  <GroupWrapper>
    <GroupHeader for={props.id}>{props.placeholder}</GroupHeader>
    {React.createElement(props.child, props)}
  </GroupWrapper>
);

FormGroup.propTypes = {
  child: PropTypes.node.isRequired,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export {
  FormGroup,
};
