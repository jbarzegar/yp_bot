import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './Loader.scss';

const Loader = state => (
  <div
    className={`Loader ${!state.loader ? 'hidden' : 'showing'}`}
  >
    <h1>{state.loader}</h1>
    <span className="loader" />
  </div>
);

Loader.PropTypes = {
  loader: PropTypes.bool,
};


export default connect(state => state)(Loader);
