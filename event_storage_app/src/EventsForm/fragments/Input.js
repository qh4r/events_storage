import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
const Input = styled.input`
  font-size: 18px;
  border-radius: 0px;
  appearance: none;
  line-height: 48px;
  margin: 5px 0;
  padding: 0 15px;
  outline: none;
  input, 
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    background-color: #FFF !important;    
    -webkit-box-shadow: 0 0 0 1000px #FFF inset !important;
  }
  border: 1px solid ${({ theme, error }) => (
  error
    ? theme.input.errorColor
    : theme.input.borderColor)};
  font-family: ${({ theme }) => theme.font};
  font-weight: 200;
  &::placeholder {
    visibility: visible;
      ${media.sm`
    visibility: hidden;
`};
  }  
`;

Input.propTypes = {
  error: PropTypes.string,
};

Input.defaultProps = {
  error: '',
};

export {
  Input,
};
