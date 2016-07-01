import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import router from './routers/router.js';
import mongoose from 'mongoose';
mongoose.connect('mongodb://localhost/ubicationdb');

const port = process.env.PORT || 8080;

const app = express();
app.use(compression());
app.use(cors());
app.use(morgan('dev'));

app.use(express.static(`${__dirname}/../client`));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', router);

app.listen(port, () => {
  console.log('Ubication server listening on port:', port);
});
