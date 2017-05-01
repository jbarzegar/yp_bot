import React from 'react';
// Redux
import { Provider } from 'react-redux';
// State
import UserState from './state/user';
// Providers
import { TokenProvider, UserProvider } from './providers/';
// Components
import Router from './modules/';
import store from './store/';


TokenProvider.getToken()
  .then((token) => {
    UserProvider.get(token)
      .then(resp => UserState.setUser(resp));
  });

const init = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default init;
