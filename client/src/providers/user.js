/* global fetch, Headers */
// Make provider an object

/*
  Inital state is empty object for now.  Should populate user data
*/
const discordEndpoint = 'https://discordapp.com/api';
const initalState = null;

const UserProvider = {
  store: initalState,
  get(token) {
    return new Promise((resolve) => {
      if (this.store === null) {
        this.getFromAPI(token)
          .then((resp) => {
            this.store = resp;
            resolve(resp);
          });
      } else {
        resolve(this.store);
      }
    });
  },
  getFromAPI: async (token) => {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    });
    const ops = {
      method: 'GET',
      headers,
      mode: 'cors',
      cache: 'default',
    };
    const resp = await fetch(`${discordEndpoint}/users/@me`, ops);
    const data = await resp.json();
    return data;
  },
};

export default UserProvider;
