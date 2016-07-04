import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import router from './routers/router.js';
import mongoose from 'mongoose';
import session from 'express-session';

const mongoDB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ubicationdb';

mongoose.connect(mongoDB_URI);

const app = express();
app.use(compression());
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser('viewFinder'));

const port = process.env.PORT || 8080;

const secret = process.env.SECRET || require('./config/secret.js');

app.use(session());
app.use(morgan('dev'));

app.use(session({
  secret: secret,
  resave: true,
  saveUninitialized: false,
}));

// http://passportjs.org/docs/google
app.use(passport.initialize());


app.use(passport.session());

router(app, express);
// app.use('/home', express.static(`${__dirname}/../client`));
// app.use('/hello', express.static(`${__dirname}/../client/landing`));


// app.use('/api', router);

app.listen(port, () => {
  console.log('Ubication server listening on port:', port);
});
