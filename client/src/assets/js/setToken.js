/* global localStorage */
const setToken = token => new Promise(resolve =>
  resolve(localStorage.setItem('YP_BOT_TOKEN', token)),
);

export default setToken;
