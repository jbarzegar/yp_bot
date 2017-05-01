import React from 'react';
import { connect } from 'react-redux';
import './Home.scss';

const Home = user => (
  <div className="Home">
    <section className="hero-body">
      <div className="container">
        <h1 className="title">
          {
            user !== {}
            ? `Hello ${user.username}!`
            : 'Hello World'
          }
        </h1>
        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Dolor inventore,
          expedita fugit quod neque vel culpa fuga odit?
          Quia facilis aspernatur excepturi repudiandae laboriosam hic voluptatibus magni, mollitia,
          repellat debitis!
        </p>
      </div>
    </section>
  </div>
);

export default connect(state => state.user)(Home);
