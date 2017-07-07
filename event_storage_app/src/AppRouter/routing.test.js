// /* eslint-disable react/react-in-jsx-scope,no-undef */
// import React from 'react';
// import { applyMiddleware, createStore } from 'redux';
// import { createMemoryHistory } from 'react-router';
// import { Provider } from 'react-redux';
// import { mount } from 'enzyme';
// import  { ThemeProvider } from 'styled-components';
// import { routerMiddleware, syncHistoryWithStore, push } from 'react-router-redux';
// import { rootReducer } from '../rootReducer';
// import { locationStateSelector } from './selectors';
// import { AppRouter } from './routing';
// import { theme } from '../shared/theme';
// import { logger } from '../../config/logger';
//
// describe('Routing', () => {
//   let store;
//   let history;
//
//   beforeEach(() => {
//     const memoryHistory = createMemoryHistory();
//     store = createStore(
//       rootReducer,
//       applyMiddleware(routerMiddleware(memoryHistory),
//       ));
//
//     history = syncHistoryWithStore(memoryHistory, store, {
//       selectLocationState: locationStateSelector(),
//     });
//   });
//
//   it('should render form on root directory', () => {
//     const router = mount(
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppRouter history={history} />
//         </ThemeProvider>
//       </Provider>,
//     );
//     store.dispatch(push('/'));
//
//     const listPage = router.find('#form-page');
//     expect(listPage).not.toBeUndefined()();
//   });
//
//   it('should render list on /list', () => {
//     const router = mount(
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppRouter history={history} />
//         </ThemeProvider>
//       </Provider>,
//     );
//     store.dispatch(push('list'));
//     const formPage = router.find('#list-page');
//     logger.debug(formPage);
//     expect(formPage).not.toBeUndefined()();
//   });
//
//   it('should render 404 any non standard directory', () => {
//     const router = mount(
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppRouter history={history} />
//         </ThemeProvider>
//       </Provider>,
//     );
//     store.dispatch(push('/asd'));
//
//     const notFoundPage = router.find('#not-found-page');
//     logger.debug(notFoundPage);
//     expect(notFoundPage).not.toBeUndefined();
//   });
// });
