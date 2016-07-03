import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import styles from './styles/entry.scss';
import Home from './components/Home.jsx';
import rootReducer from './reducers/index.js';

const initialState = window.__INITIAL_STATE__;

const configureStore = () => {
  const store = createStore(rootReducer, initialState,
    window.devToolsExtension && window.devToolsExtension()
  );
  return store;
};

const store = configureStore();

render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app')
);
