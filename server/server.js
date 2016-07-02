import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import compression from 'compression';
import router from './routers/router.js';
import mongoose from 'mongoose';
import secret from './config/secret.js';
import session from 'express-session';
mongoose.connect('mongodb://localhost/ubicationdb');

const port = process.env.PORT || 8080;

const app = express();
app.use(compression());
app.use(cors());
app.use(morgan('dev'));

app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

router(app, express);
// app.use('/home', express.static(`${__dirname}/../client`));
// app.use('/hello', express.static(`${__dirname}/../client/landing`));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('Ubication server listening on port:', port);
});
