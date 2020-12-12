import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './config/axios';
import { App } from './containers/App/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/storeConfig';

console.log(process.env.NODE_ENV);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
