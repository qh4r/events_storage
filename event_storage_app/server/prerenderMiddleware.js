/* eslint-disable no-plusplus,no-console */
import React from 'react';
import fs from 'fs';
import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import { createMemoryHistory } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { template } from 'lodash';
import { ServerStyleSheet } from 'styled-components';
import { App } from '../src/App';
import { rootReducer } from '../src/rootReducer';
import { locationStateSelector } from '../src/AppRouter/selectors';

const readModuleFile = (path, callback) => {
  try {
    const filename = require.resolve(path);
    fs.readFile(filename, 'utf8', callback);
  } catch (e) {
    callback(e);
  }
};

export const handlePreRender = getState => (req, res) => {
  const defaultState = getState();

  const memoryHistory = createMemoryHistory(req.originalUrl);
  const store = createStore(
    rootReducer,
    defaultState,
    applyMiddleware(
      routerMiddleware(memoryHistory)));

  const history = syncHistoryWithStore(memoryHistory, store, {
    selectLocationState: locationStateSelector(),
  });

  const sheet = new ServerStyleSheet();
  const html = renderToString(
    sheet.collectStyles(
      <Provider store={store}>
        <App history={history} />
      </Provider>));

  const css = sheet.getStyleTags();
  const initialState = store.getState().toJS();
  readModuleFile('../public/index.html', (err, index) => {
    let parsedTemplate;
    try {
      parsedTemplate = template(index)({
        css,
        html,
        initialState: JSON.stringify(initialState).replace(/</g, '\\u003c'),
      });
    } catch (e) {
      res.send(e);
    }
    res.send(parsedTemplate);
  });
};
