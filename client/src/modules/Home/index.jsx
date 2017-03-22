/* global YP_API */
import React from 'react'

const getUserName = () => {
  const user = window.sessionStorage.getItem('userInfo')
  const username = JSON.parse(user)
  return username.username
}

const Home = () => (
  <section className="homeWrap">
    <h1>Welcome to yp bot</h1>
    <h2>Hey {getUserName()}</h2>
  </section>
)

export default Home
