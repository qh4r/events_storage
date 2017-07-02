import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './AppRouter';

const App = ({ history }) => (
  <ThemeProvider theme={{
    mycolor: 'red',
  }}
  >
    <AppRouter history={history} />
  </ThemeProvider>
);

App.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  App,
};
