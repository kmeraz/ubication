import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';
import styles from './styles/entry.scss';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Landing from './components/Landing.jsx';
import actions from './actions/index.js';

const store = configureStore();

render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Landing} />
      <Route path="/home" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
