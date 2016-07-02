import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../client/reducers/index';
import App from '../../client/components/App';
import renderFullPage from '../views/index';

import User from '../models/user.js';

// Handler for rendering the index page with user data, if available
// http://redux.js.org/docs/recipes/ServerRendering.html
module.exports = (req, res) => {
  // Initialize user state if user is logged in
  var user = {};
  var savedPlaces = [];

  var sendInitialState = () => {
    // Create a new Redux store instance
    const store = createStore(rootReducer, {
      savedPlaces: savedPlaces,
      user: user,
    });

    // Render the component to a string
    const html = renderToString(
      <Provider store={store}>
      <App />
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
      lastName: req.session.passport.user.name.familyName || null
    };

    User.findOne({
      userId: user,
    })
      .then(function(foundUser) {
        return foundUser.getPlaces();
      })
      .then(function(foundPlaces) {
        savedPlaces = foundPlaces;
        sendInitialState();
      });
  } else {
    sendInitialState();
  }

};
