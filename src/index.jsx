/*
  index.jsx:
    Entry Point: This file serves as the entry point for your application.
    Rendering: It is responsible for rendering the root React component (usually App) into the DOM.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);