import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './responsive-overrides.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Removed temporary mount debug log now that production layout is stable.

reportWebVitals();
