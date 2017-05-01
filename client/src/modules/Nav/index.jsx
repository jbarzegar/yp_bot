import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './Nav.scss';
import Logo from './logo';

const discordLoginLink = () => {
  const baseUrl = window.location.hostname;
  const protocal = window.location.protocol;
  const port = 5000;
  const authEndpoint = 'auth/login/';
  const url = `${protocal}//${baseUrl}:${port}/${authEndpoint}`;
  return url;
};

/* eslint-disable react/prop-types */
const Nav = user => (
  <nav id="App-nav" className="has-shadow">
    {/* Left Side */}
    <section className="nav-left">
      <Link to="/" className="nav-item">
        <Logo />
        <div className="heading-content flex">
          <h2>YP Bot</h2>
          <span className="beta-tag">{'\u00A0'} beta</span>
        </div>
      </Link>
    </section>
    {/* Right side */}
    <ul className="nav-item">
      <li className="nav-item">
        <Link to="/about">
        About
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/support">
        Support
        </Link>
      </li>
      <li className="nav-item">
        {
          user !== {}
          ? <img src={`https://cdn.discordapp.com/avatars/${user.id}/${user.avatar}.jpg`} alt={user.username} />
          : (<a href={discordLoginLink()}>
            <button className="is-outlined is-primary">
              Sign in
            </button>
          </a>)
        }
      </li>
    </ul>
  </nav>
);

export default connect(state => state.user)(Nav);
