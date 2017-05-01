import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { connect } from 'react-redux';

// State
import UserState from '../state/user';

// Nav menu
import Nav from './Nav/';
// Rendered components
import Home from './Home/';
import About from './About/';
import Support from './Support/';

const Routes = (data) => {
  if (data && UserState) {
    //
  }
  return (<Router>
    <div className="App-wrap">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Support" component={Support} />
    </div>
  </Router>);
};

export default connect(state => state.user)(Routes);
