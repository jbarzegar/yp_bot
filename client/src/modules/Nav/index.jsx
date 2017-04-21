import React from 'react';
// import logo from './bot.svg';
import Logo from './bot';
import './Nav.scss';

const Nav = () => (
  <nav id="App-nav">
    {/* Left Side */}
    <section className="nav-left">
      <a href="/" className="nav-item">
        <Logo />
      </a>
    </section>
    {/* Right side */}
    <ul className="nav-item">
      <li className="nav-item">
        About
      </li>
      <li className="nav-item">
        Support
      </li>
      <li className="nav-item">
        <button className="is-outlined is-primary">Sign in</button>
      </li>
    </ul>
  </nav>
);

export default Nav;
