/* global localStorage */
import parseQueryString from '../assets/js/parseQueryString';
import log from '../assets/js/logger';
import cleanUrl from '../assets/js/cleanURL';

const TokenProvider = {
  findTokenInQueryString() {
    return new Promise((resolve, reject) => {
      const token = parseQueryString('code');
      if (token === null) {
        reject(token);
      } else {
        resolve(token);
      }
    });
  },
  findTokenInLocalStore() {
    const token = localStorage.getItem('YP_BOT_TOKEN');
    return new Promise((resolve, reject) => {
      if (token === null) {
        reject(null);
      } else {
        resolve(token);
      }
    });
  },
  setToken(token) {
    return new Promise(resolve => resolve(localStorage.setItem('YP_BOT_TOKEN', token)));
  },
  getToken() {
    return new Promise((resolve, reject) => {
      /*
        Check for query string
        if it doesn't exist check in localstorage
      */
      this.findTokenInQueryString()
        .then((token) => {
          log('Found token... Handle it');
          this.setToken(token)
            .then(cleanUrl()); // Sets token
        })
        .catch(() => {
          this.findTokenInLocalStore()
          .then(token => resolve(token)) // Returns token
          .catch(() => reject('No token found... User must login')); // Do nothing.  Login
        });
    });
  },

};

export default TokenProvider;
