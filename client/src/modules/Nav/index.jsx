import React, { PropTypes } from 'react'
import {
  Link,
} from 'react-router-dom'

const loginWithDiscord = () => {
  const authUrl = 'https://discordapp.com/oauth2/authorize'
  const clientId = '265942084488265728'
  const scopes = 'identify'
  const url = `${authUrl}?client_id=${clientId}&scope=${scopes}&response_type=code`
  return url
}

const Nav = ({ isLoggedIn }) => (
  <nav>
    <ul>
      <li>Home</li>
      <li>Something</li>
      {
        isLoggedIn
        ? <li> My account </li>
        : <li>
          <a href="http://localhost:5000/auth/login/">Login</a>
        </li>
      }
    </ul>
  </nav>
)

Nav.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
}

export default Nav
