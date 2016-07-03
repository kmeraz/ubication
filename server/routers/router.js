import path from 'path';
import addPlace from '../controllers/places/addPlace.js';
import deletePlace from '../controllers/places/deletePlace.js';
import getPlaces from '../controllers/places/getPlaces.js';
import indexHandler from './indexHandler.js';
import * as auth from '../auth/auth.js';

module.exports = (app, express) => {


  const redirectHome = (req, res) => res.redirect('/home/');

  app.use(express.static(`${__dirname}/../../client/`));

  app.use('/home/*', auth.checkAuth, indexHandler);

  app.get('/login', (req, res) => {
    res.sendFile(path.resolve('server', 'views', 'login.html'));
  });

  app.get('/', redirectHome);
  app.get('/home', redirectHome);


  app.get('/auth/facebook', auth.handleLogin, redirectHome);
  app.get('/auth/facebook/callback', auth.authenticateLogin);

  app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy(() => {
      console.log('session after logout', req.session);
      console.log('user after logout', req.user);
      res.redirect('/login');
    });
  });



  app.get('/api/places', auth.checkAuth, getPlaces);
  app.post('/api/places', auth.checkAuth, addPlace);
  app.delete('/api/places', auth.checkAuth, deletePlace);
};
