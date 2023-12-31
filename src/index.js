import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <App />
    </Router>
  </React.StrictMode>
);