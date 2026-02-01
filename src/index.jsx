/*
  index.jsx:
    Entry Point: This file serves as the entry point for your application.
    Rendering: It is responsible for rendering the root React component (usually App) into the DOM.

  Bootstrap:
    Import Bootstrap first so it doesn't override custom CSS

  AuthContext/AuthProvider:
    Wrapping <AuthProvider> around <BrowserRouter> allows everything to access the auth state within AuthContext.jsx, AuthProvider isauth logic
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
// Authorization
import { AuthProvider } from './context/AuthContext.jsx';
// Styles
import "bootstrap/dist/css/bootstrap.min.css"; //BS CSS
import 'bootstrap'; //BS JS (POPPER)
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);