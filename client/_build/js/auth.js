import helpers from './helpers';
import api from './api';
const auth = {
  checkForKey() {
    // Check querystring first in case it's a redirect
    const queryStringId = helpers.getQueryStringByName('code');
    if (queryStringId) {
      // Found query string. Save it to local storage and strip the url
      window.localStorage.setItem('bot_key', queryStringId);
      return helpers.stripQueryString();
    } else if (queryStringId === null) {
      helpers.stripQueryString();
    }

    // Check in localStorage
    const clientId = window.localStorage.getItem('bot_key');
    // If client id is there make a request to discord
    if (clientId) {
      return api.getDiscordUser(clientId);
    }
    console.info('No key found.  Must login');
  },
  signOut() {
    window.localStorage.remoteItem('bot_key');
  }
};

export default auth;
