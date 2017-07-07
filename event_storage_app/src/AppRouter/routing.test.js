// /* eslint-disable react/react-in-jsx-scope,no-undef,no-param-reassign */
// import React from 'react';
// import { applyMiddleware, createStore } from 'redux';
// import { createMemoryHistory, Route } from 'react-router';
// import { Provider } from 'react-redux';
// import { mount, shallow } from 'enzyme';
// import { ThemeProvider } from 'styled-components';
// import { routerMiddleware, syncHistoryWithStore, push } from 'react-router-redux';
// import { rootReducer } from '../rootReducer';
// import { locationStateSelector } from './selectors';
// import { AppRouter } from './routing';
// import { theme } from '../shared/theme';
// import { logger } from '../../config/logger';
// import { EventsForm } from '../EventsForm/EventsFormContainer';
// import { NotFound } from './404';
//
// describe('Routing', () => {
//   let store;
//   let history;
//
//   beforeEach(() => {
//     const memoryHistory = createMemoryHistory('/list');
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
//     logger.debug(store.getState().toJS());
//     const listPage = router.find('#form-page');
//     expect(listPage).not.toBeUndefined()();
//   });
//
//   it('renders correct routes', () => {
//     const wrapper = shallow(<AppRouter />);
//     const resultPathMap = wrapper.find(Route).reduce((pathMap, route) => {
//       const routeProps = route.props();
//       pathMap[routeProps.path] = routeProps.component;
//       return pathMap;
//     }, {});
//     expect(resultPathMap['/']).toEqual(EventsForm);
//   });
//
//   it('should render list on /list', () => {
//     const router = shallow(
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppRouter history={history} />
//         </ThemeProvider>
//       </Provider>,
//     );
//     store.dispatch(push('/list'));
//     const formPage = router.find('#list-page');
//     logger.debug(store.getState().toJS());
//     expect(formPage).not.toBeUndefined()();
//   });
//
//   it('should render 404 any non standard directory', () => {
//     store.dispatch(push('/asd'));
//
//     const router = mount(
//       <Provider store={store}>
//         <ThemeProvider theme={theme}>
//           <AppRouter history={history} />
//         </ThemeProvider>
//       </Provider>,
//     );
//
//     const notFoundPage = router.find('#not-found-page');
//     logger.debug(notFoundPage);
//     expect(notFoundPage).not.toBeUndefined();
//   });
// });
