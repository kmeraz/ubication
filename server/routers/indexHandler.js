import React from 'react';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import rootReducer from '../../client/reducers/index.js';
import Home from '../../client/components/Home';
import renderFullPage from '../views/index.js';

import User from '../models/user.js';

// Handler for rendering the index page with user data, if available
// http://redux.js.org/docs/recipes/ServerRendering.html
module.exports = (req, res) => {
  // Initialize user state if user is logged in
  let user = {};
  let savedPlaces = [];
  let modalState = false;

  const sendInitialState = () => {
    // Create a new Redux store instance
    const store = createStore(rootReducer, {
      savedPlaces: savedPlaces,
      user: user,
      modalState: modalState,
    });

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
        <Router history={hashHistory}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );

    // Grab the initial state from our Redux store
    const initialState = store.getState();

    // Send the rendered page back to the client as a String
    res.send(renderFullPage(html, initialState));

  };

  if (req.session.passport && req.session.passport.user) {
    user = {
      // how to handle Facebook and Google both
      // googleUserId: req.session.passport.user.id,
      firstName: req.session.passport.user.name.givenName || null,
      lastName: req.session.passport.user.name.familyName || null,
    };

    User.findOne({
      userId: user,
    })
      .then((foundUser) => {
        return foundUser.getPlaces();
      })
      .then((foundPlaces) => {
        savedPlaces = foundPlaces;
        sendInitialState();
      });
  } else {
    console.log('ciik stu');
    express.static(`${__dirname}/../client/landing`);

    // sendInitialState();
  }

};
