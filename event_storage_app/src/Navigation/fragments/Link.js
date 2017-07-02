import styled from 'styled-components';
import PropTypes from 'prop-types';

// language=SCSS prefix=dummy{ suffix=}
const Link = styled.a `
  text-decoration: none;
  color: ${({ isActive }) => (isActive ? 'red' : 'white')};
  margin: 5px 10px;
  &:hover {
    text-decoration: ${({ isActive }) => (isActive ? 'none' : 'underline')};
  }
`;

Link.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export {
  Link,
};

