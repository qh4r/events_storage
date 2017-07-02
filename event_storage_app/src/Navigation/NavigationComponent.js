import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper } from './fragments';

const Navigation = ({ children }) => (<div>
  <HeaderWrapper>
    <div className="App-header">
      <h2>Welcome to React</h2>
    </div>
    <p className="App-intro">
      To get started, edit <code>src/App.js</code> and save to reload.
    </p>
  </HeaderWrapper>
  { children }
</div>);

Navigation.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(React.PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export {
  Navigation,
};
