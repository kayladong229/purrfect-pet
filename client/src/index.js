import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// eslint-disable-next-line
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

serviceWorker.register();