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