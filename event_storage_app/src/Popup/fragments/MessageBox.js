import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
const MessageBox = styled.div`
  position: absolute;
  width: 50%;
  min-height: 20%;
  left: 50%;
  top: 25%;
  display: flex;
  justify-content: center;
  font-size: 20px;
  box-shadow: 1px 1px 10px #555;
  align-items: center;
  border-radius: 8px;
  transform: translateX(-50%) translateY(-25%);
  background-color: ${({ isError, theme: { popup } }) => (
  isError ? popup.errorColor : popup.successColor
)};
  color: ${({ isError, theme: { popup } }) => (
  isError ? popup.errorFontColor : popup.successFontColor
)};
  ${media.sm`
    width: 30%;
`}
`;

MessageBox.propTypes = {
  isError: PropTypes.bool.isRequired,
};

export {
  MessageBox,
};
