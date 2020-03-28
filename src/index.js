import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (window.location.search === '?fcc=true') {
  const scriptEl = document.createElement('script');
  scriptEl.async = true;
  scriptEl.src =
    'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js';
  document.getElementsByTagName('body')[0].appendChild(scriptEl);
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
