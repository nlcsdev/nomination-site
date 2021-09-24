import React from 'react';
import ReactDOM from 'react-dom';

import MainPage from './js/MainPage';

import { createStore } from "redux";
import root_reducer from './root/root_reducer'
import { Provider } from 'react-redux';

import './css/index.css';
import './css/search-bar.css';
import './css/search-result.css';
import './css/MovieElement.css';
import './css/main-content.css';
import './css/history-list.css';
import './css/filter.css';
import './css/loading.css';

const store = createStore(root_reducer);

ReactDOM.render(
  <Provider store={store}>
    {/* bootstrap stylesheet */}
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
      integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
      crossOrigin="anonymous"
    />
    <MainPage />
  </Provider>,
  document.getElementById('root')
);
