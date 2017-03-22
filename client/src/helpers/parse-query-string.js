/* eslint-disable */
function parseQueryString(variable) {
  const query = window.location.search.substr(1)
  const vars = query.split('&')
  // Loop through query string
  for(let el of vars) {
    const pair = el.split('=')
    if (pair[0] === variable) {
      return { token: decodeURIComponent(pair[1]) }
    }
    return false
  }
}

export default parseQueryString
