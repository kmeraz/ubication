import express from 'express';
import addPlace from '../controllers/places/addPlace.js';
import deletePlace from '../controllers/places/deletePlace.js';
import getPlaces from '../controllers/places/getPlaces.js';
import indexHandler from './indexHandler.js';
import * as auth from '../auth/auth.js';

export default (app, express) => {

  // if (process.env.NODE_ENV !== 'dev') {
  //   app.get('*', (req, res, next) => {
  //     if (req.headers['x-forwarded-proto'] !== 'https') {
  //       console.log(req.url)
  //       res.redirect('http://localhost:8080' + req.url);
  //     } else {
  //       next(); /* Continue to other routes if we're not redirecting */
  //     }
  //   });
  // }

  app.get('/home/*', auth.checkAuth, indexHandler);

  app.get('/api/places', auth.checkAuth, getPlaces);
  app.post('/api/places', auth.checkAuth, addPlace);
  app.delete('/api/places', auth.checkAuth, deletePlace);

  app.get('/auth/facebook', auth.handleLogin);
  app.get('/auth/facebook/callback', auth.authenticateLogin,
    (req, res) => {
      res.redirect('/home/');
    }
  );

  app.get('/auth/logout', (req, res) => {
    req.session.destroy(() => {
      res.redirect('/');
    });
  });
};
