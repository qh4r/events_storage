import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './fragments';
import { Link } from './fragments/Link';
import { LIST_LOCATION, FORM_LOCATION } from './constants';

const NavigationComponent = ({ children, goToList, goToForm, route }) => (<div>
  <HeaderWrapper>
    <div className="App-header">
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
    <Link isActive={route === LIST_LOCATION} onClick={goToList}>LIST</Link>
    <Link isActive={route === FORM_LOCATION} onClick={goToForm}>FORM</Link>
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
