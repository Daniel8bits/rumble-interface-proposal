import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'tailwindcss/tailwind.css';
import 'simplebar/dist/simplebar.min.css';
import '@style/global.css'
import '@style/custom.scss'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

