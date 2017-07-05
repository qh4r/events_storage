import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, AppBody, HeaderControls, Link, PageBody } from './fragments';
import { LIST_LOCATION, FORM_LOCATION } from './constants';


const NavigationComponent = ({ children, goToList, goToForm, route }) => (
  <AppBody>
    <HeaderWrapper>
      <HeaderControls>
        <Link isActive={route === LIST_LOCATION} onClick={goToList}>LIST</Link>
        <Link isActive={route === FORM_LOCATION} onClick={goToForm}>FORM</Link>
      </HeaderControls>
    </HeaderWrapper>
    <PageBody>
      { children }
    </PageBody>
  </AppBody>
);

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
