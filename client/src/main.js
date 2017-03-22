import { render } from 'react-dom'
import YP_API from './api/'
import main from './modules/Router/'

// Add api to window obj
window.YP_API = YP_API

render(main(), document.querySelector('.app'))
