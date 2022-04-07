import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'tailwindcss/tailwind.css';
import '@style/global.css'
import '@style/custom.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

