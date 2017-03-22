/* eslint import/no-extraneous-dependencies: 0 */
import history from 'connect-history-api-fallback'
import proxy from 'proxy-middleware'
import url from 'url'

const proxyOpts = url.parse('http://localhost:5000/auth')
proxyOpts.route = '/auth'

function devServer(bs) {
  bs.init({
    server: './.build',
    middleware: [history(), proxy(proxyOpts)],
    notify: false,
    ui: false,
    reloadOnRestart: true,
    open: false,
  })
}

export default devServer
