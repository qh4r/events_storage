import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './fragments';
import { Link } from './fragments/Link';
import { LIST_LOCATION, FORM_LOCATION } from './constants';
import { HeaderControls } from './fragments/HeaderControls';

const NavigationComponent = ({ children, goToList, goToForm, route }) => (<div>
  <HeaderWrapper>
    <HeaderControls>
      <Link isActive={route === LIST_LOCATION} onClick={goToList}>LIST</Link>
      <Link isActive={route === FORM_LOCATION} onClick={goToForm}>FORM</Link>
    </HeaderControls>
  </HeaderWrapper>
  { children }
</div>);

NavigationComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  goToList: PropTypes.func.isRequired,
  goToForm: PropTypes.func.isRequired,
  route: PropTypes.string.isRequired,
};

export {
  NavigationComponent,
};
