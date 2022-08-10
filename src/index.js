import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './scss/app.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import ThemeProvider from './hooks/ThemeProvider'

ReactDOM.render(
  <ThemeProvider>
    <Router>
    <App />
    </Router>
  </ThemeProvider> , 
    document.getElementById('root')
);


