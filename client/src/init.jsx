import React from 'react';
// Redux
import { Provider } from 'react-redux';
// State
import UserState from './state/user';
import LoaderState from './state/loader';
// Providers
import { TokenProvider, UserProvider } from './providers/';
// Components
import Router from './modules/';
import store from './store/';

TokenProvider.getToken()
  .then((token) => {
    UserProvider.get(token)
      .then(resp => UserState.setUser(resp))
      .then(() => LoaderState.hideLoader())
      .catch(err => console.log(err));
  })
  .catch(() => LoaderState.hideLoader());

const init = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default init;
