import passport from 'passport';
import FacebookStrategy from 'passport-facebook';
import User from '../models/user.js';
import keys from './fb.js';

const clientID = process.env.FB_CLIENT_ID || keys.FB_CLIENT_ID;
const clientSecret = process.env.FB_CLIENT_SECRET || keys.FB_CLIENT_SECRET;

passport.use(new FacebookStrategy.Strategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'link', 'email', 'first_name', 'last_name', 'picture.type(normal)', 'gender', 'verified', 'locale'],
},
  (accessToken, refreshToken, profile, done) => {
  // Create a user if it is a new user, otherwise just get the user from the DB
    User.find({
      facebookUserId: profile.id,
    },
      (err, user) => {
        if (err) {
          console.log('error connecting to db and finding user');
        } else {
          // If user === null then the user
          // is not in the db. We will add them.
          if (user.length === 0) {
            // create the newUser based off the
            // user model

            const newUser = User({
              facebookUserId: profile.id,
              firstName: profile.name.givenName,
              lastName: profile.name.familyName,
              photo_url: profile.photos[0].value,
            });

            // save the user to db
            newUser.save((err) => {
              if (err) {
                console.log('error saving the new user to db');
              } else {
                console.log('User created!', newUser);
              }
            });
          }
        }
      });

    return done(null, profile);
  })
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

export const checkAuth = (req, res, next) => {
  if (req.session.passport ? req.session.passport.user : false) {
    console.log('user', req.user);
    console.log('session', req.session);
    return next();
  } else {
    console.log('no session');
    req.session.error = 'Bad credentials.';
    res.redirect('/login');
  }
};

export const handleLogin = passport.authenticate('facebook');

export const authenticateLogin = passport.authenticate('facebook', {
  successRedirect: '/home/',
  failureRedirect: '/login',
});





