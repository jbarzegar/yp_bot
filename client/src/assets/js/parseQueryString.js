const parseQueryString = variable => (
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

export default parseQueryString;
