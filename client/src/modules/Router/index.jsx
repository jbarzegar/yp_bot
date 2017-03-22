/* global localStorage, YP_API */
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import helpers from '../../helpers'

// Components
import Home from '../Home/'
import Nav from '../Nav/'

const findUserToken = () => {
  /**
   * Check query string on entry if query string exists handle it.
   * Save it to localStorage and clean url
  */
  const query = helpers.parseQueryString('code')
  // If no query string, check localStorage and handle user reqs
  if (!query) {
    const localClientID = localStorage.getItem('botClientID')
    // Check for clientKey
    if (localClientID === null) {
      return false
    }
    return true
  }
  // Store client id
  localStorage.setItem('botClientID', query.token)
  // Clearn uri
  return helpers.cleanQueryString()
}

const Routes = () => {
  const isLoggedIn = findUserToken()
  // Render routes
  return (
    <Router>
      <div>
        <Nav isLoggedIn={isLoggedIn} />
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  )
}

const renderRoutes = () => <Routes />

export default renderRoutes
