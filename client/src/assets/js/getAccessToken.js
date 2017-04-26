/* global localStorage */
const checkForToken = () => {
  const token = localStorage.getItem('YP_BOT_TOKEN');
  return token;
};

export default checkForToken;
