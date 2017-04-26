const findQueryVar = variable => (
  new Promise((resolve, reject) => {
    const query = window.location.search.substring(1);
    const queryParams = query.split('&');
    queryParams.forEach((el, i) => {
      const pair = queryParams[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
        resolve(decodeURIComponent(pair[1]));
      } else {
        reject(null);
      }
    });
  })
);

const checkForCode = () => (
  new Promise((resolve, reject) => {
    const token = findQueryVar('code');
    if (token === null) {
      reject(token);
    } else {
      resolve(token);
    }
  })
);

export default checkForCode;
