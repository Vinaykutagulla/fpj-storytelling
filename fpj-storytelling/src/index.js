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

// Debug: confirm app mounted in production
if (typeof window !== 'undefined') {
  console.log('[FPJ] React application mounted at', new Date().toISOString());
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
