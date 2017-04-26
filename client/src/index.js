import { render } from 'react-dom';
import checkForCode from './assets/js/checkForCode';
import getToken from './assets/js/getAccessToken';
import setToken from './assets/js/setToken';
import cleanURL from './assets/js/cleanURL';
// Init react
import init from './init';
import './index.scss';

const queryString = checkForCode();
queryString
  .then((resp) => {
    /*
      There is a token in the querystring.  Set in the localstorage clean the url
    */
    setToken(resp)
      .then(() => cleanURL());
  })
  .catch(() => {
    // If there's no token check for the token in localStorage
    console.log(getToken());
  });

render(
  init(),
  document.getElementById('root'),
);
