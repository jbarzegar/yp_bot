function cleanQueryString() {
  const url = window.location.href.split('?')
  console.log(url)
  window.location.href = url[0]
}

export default cleanQueryString
