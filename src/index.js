import React from 'react';
import './scss/app.scss';
import App from './App';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './context/ThemeProvider';
import {store} from './redux/store'
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider>
      <Provider store = {store}>
    <App />
    </Provider>
    </ThemeProvider>
  </BrowserRouter>, 
);


