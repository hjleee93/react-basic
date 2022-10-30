import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Counter from './Counter';
import reportWebVitals from './reportWebVitals';
import Hello from './Hello';
// import ContextSample from './ContextSample';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello name={'hj'} isSpecial={true}/>
    <Counter/>
    <App />
    {/* <ContextSample/> */}
  </React.StrictMode>
);

reportWebVitals();
