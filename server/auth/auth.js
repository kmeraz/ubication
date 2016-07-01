import passport from 'passport';
import FacebookStrategy from 'passport-facebook';

if (process.env.NODE_ENV === 'dev') {
  const keys = require('../config/fb'),
      clientID = keys.clientID,
      clientSecret = keys.clientSecret;
} else {
  const clientID = process.env.FB_CLIENT_ID,
      clientSecret = process.env.FB_CLIENT_SECRET;
}

export const checkAuth = (req, res, next) => {
  console.log(req);
  if (req.session.passport && req.session.passport.user) {
    console.log('user', req.user);
    console.log('session', req.session);
    return next();
  } else {
    console.log('no session');
    req.session.error = 'Bad credentials.';
    res.redirect('/login');
  }
};

export const handleLogin = passport.authenticate('facebook', {
  authType: 'rerequest',
  scope: ['public_profile', 'email'],
});

export const handleCallback = passport.authenticate('facebook', {
  successRedirect: '/home/',
  failureRedirect: '/login',
});

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

passport.use(new FacebookStrategy.Strategy({
  clientID: clientID,
  clientSecret: clientSecret,
  callbackURL: '/auth/facebook/callback',
  profileFields: ['id', 'displayName', 'link', 'email', 'first_name', 'last_name', 'picture', 'gender', 'verified', 'locale'],
},
  (accessToken, refreshToken, profile, done) => {
  // Create a user if it is a new user, otherwise just get the user from the DB
    // User
    //   .findOrCreate({
    //     where: {
    //       facebookUserId: profile.id
    //     },
    //     defaults: {
    //       firstName: profile.name.givenName,
    //       lastName: profile.name.familyName
    //     }
    //   })
    //   .spread(function(user, created) {
    //     console.log('User data returned from User.findOrCreate: ', user.get({
    //       plain: true
    //     }));
    //     console.log('New User Created? (t/f): ', created);
    //   });

    return done(null, profile);
  }));



