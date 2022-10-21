import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import Counter from './Counter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Counter/> */}
    <App />
  </React.StrictMode>
);

reportWebVitals();
