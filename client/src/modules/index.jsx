import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

// Nav menu
import Nav from './Nav/';
// Rendered components
import Home from './Home/';
import About from './About/';
import Support from './Support/';


const Routes = () => (
  <Router>
    <div className="App-wrap">
      <Nav />
      <Route exact path="/" component={Home} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Support" component={Support} />
    </div>
  </Router>
);

export default Routes;
