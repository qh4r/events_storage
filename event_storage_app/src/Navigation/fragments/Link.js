import styled from 'styled-components';
import PropTypes from 'prop-types';
import { media } from '../../shared/mediaMixins';

// language=SCSS prefix=dummy{ suffix=}
const Link = styled.a `
  text-decoration: none;
  color: ${({ isActive, theme }) => (isActive ? theme.headerBackground : theme.headerFontColor)};
  background-color: ${({ isActive, theme }) => (isActive ? theme.headerFontColor : theme.buttonColor)};
  margin: 5px 0;
  min-width: 25%;
  text-align: center;
  font-size: 24px;
  font-weight: 300;
  padding: 10px;
  border-radius: 8px;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: ${({ isActive, theme }) => (isActive ? theme.headerFontColor : theme.hoveredButtonColor)};
  }
  ${media.sm`
    min-width: 80px;
    font-size: 18px;
    padding: 15px 5px;
    margin: 0;
    border-radius: 0;
`}
`;

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export {
  Link,
};

