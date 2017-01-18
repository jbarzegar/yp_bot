const helpers = {
  getQueryStringByName(param, url) {
    if (!url) {
      url = window.location.href;
    }

    const paramNameRegex = /[[\]]/g;
    const cleanParam = param.replace(paramNameRegex, '\\$&');
    const results = new RegExp(`[?&]${cleanParam}(=([^&#]*)|&|#|$)`).exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  },
  stripQueryString() {
    window.history.replaceState({}, null, '/');
  }
};

export default helpers;
