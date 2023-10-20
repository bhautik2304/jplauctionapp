import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { store } from './Stores'
import { Provider } from 'react-redux'
import './Style/index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
  </>
);