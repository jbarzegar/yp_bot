/* global fetch, Headers */

const baseUrl = 'https://discordapp.com/api/'

const API = {
  getUserInfo(token) {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', `Bearer ${token}`)
    const opts = {
      method: 'GET',
      headers,
    }
    return fetch(`${baseUrl}users/@me`, opts)
  },
}

export default API
