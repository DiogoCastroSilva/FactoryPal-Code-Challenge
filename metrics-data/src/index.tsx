import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Global styles
import '../node_modules/react-vis/dist/style.css';
import { GlobalStyles } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);