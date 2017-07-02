import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppRouter } from './AppRouter';

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={{
      mycolor: 'red',
    }}
    >
      <AppRouter />
    </ThemeProvider>
  </Provider>
);

export {
  App,
};
