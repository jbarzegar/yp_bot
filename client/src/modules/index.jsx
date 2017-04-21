import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Nav from './Nav/';
import App from './App/';

const Routes = () => (
  <div className="App-wrap">
    <Nav />
    <Router>
      <Route exact path="/" component={App} />
    </Router>
  </div>
);

export default Routes;
