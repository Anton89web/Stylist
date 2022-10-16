import React from 'react';
import ReactDOM from 'react-dom/client';
import  Main  from './pages/main/main';
import "normalize.css";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Main/>
  </React.StrictMode>
);

