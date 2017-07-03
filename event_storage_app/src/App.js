import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { AppRouter } from './AppRouter';
import { theme } from './shared/theme';
import { AppTheme } from './shared/AppTheme';

const App = ({ history }) => (
  <ThemeProvider theme={theme}>
    <AppTheme>
      <AppRouter history={history} />
    </AppTheme>
  </ThemeProvider>
);

App.propTypes = {
// eslint-disable-next-line react/forbid-prop-types
  history: PropTypes.object.isRequired,
};

export {
  App,
};
