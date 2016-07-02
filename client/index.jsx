import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import configureStore from './store/configureStore.js';
import styles from './styles/entry.scss';
import Home from './components/Home.jsx';
import rootReducer from './reducers/index.js';

const initialState = window.__INITIAL_STATE__;

const store = createStore(rootReducer, initialState);

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
