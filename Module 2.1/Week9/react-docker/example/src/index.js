import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const someNumbers = [1, 2, 3, 4, 5];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App numbers={someNumbers} />
  </React.StrictMode>
);
