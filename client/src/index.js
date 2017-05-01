import { render } from 'react-dom';
// Init react
import init from './init';
import './index.scss';

const renderApp = () => render(
  init(),
  document.getElementById('root'),
);

renderApp();
