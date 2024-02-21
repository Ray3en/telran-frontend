import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import { store } from './store';

export const ROOT_URL = 'https://telran-backend.onrender.com/'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

