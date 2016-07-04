import React from 'react';
import { renderToString } from 'react-dom/server';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../../client/reducers/index.js';
import Home from '../../client/components/Home';
import renderFullPage from '../views/index.js';
import getPlaces from '../controllers/places/getPlaces.js';
import User from '../models/user.js';

// Handler for rendering the index page with user data, if available
// http://redux.js.org/docs/recipes/ServerRendering.html
module.exports = (req, res) => {
  // Initialize user state if user is logged in
  let user = {};
  let savedPlaces = [];
  let modalState = {
    open: false,
  };
  let view = 'home';

  const sendInitialState = () => {
    // Create a new Redux store instance
    const store = createStore(rootReducer, {
      savedPlaces: savedPlaces,
      user: user,
      modalState: modalState,
      view: view,
    });

    // Grab the initial state from our Redux store
    const initialState = store.getState();
    console.log('savedPlaces', savedPlaces);
    // Send the rendered page back to the client as a String
    res.send(renderFullPage(initialState));
  };

  if (req.session.passport && req.session.passport.user) {
    user = {
      facebookUserId: req.session.passport.user.id,
      firstName: req.session.passport.user.name.givenName || null,
      lastName: req.session.passport.user.name.familyName || null,
      photo_url: req.session.passport.user.photos[0].value || null,
    };

    getPlaces(user.facebookUserId)
    .then((data) => {
      savedPlaces = data;
      console.log('data within promise', data);
      console.log('this is saved places', savedPlaces);
      sendInitialState();
    });

    
  } else {
    console.log('sending initial state blank');
    sendInitialState();
  }
};
