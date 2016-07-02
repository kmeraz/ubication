import express from 'express';
const router = express.Router();
import addPlace from '../controllers/places/addPlace.js';
import deletePlace from '../controllers/places/deletePlace.js';
import getPlaces from '../controllers/places/getPlaces.js';
import loginUser from '../controllers/users/loginUser.js';

let result;

router.route('/user')
  .get((req, res) => {
    result = loginUser(req.query.userId);
    res.send(result);
  });

router.route('/places')
  .get((req, res) => {
    result = getPlaces(req.query.userId);
    res.send(result);
  })
  .post((req, res) => {
    let userId = req.query.userId;
    let myLatLng = req.query.myLatLng;
    let note = req.query.note;
    result = addPlace(userId, myLatLng, note);
    res.send(result);
  })
  .delete((req, res) => {
    result = deletePlace(req.query.place);
    res.send(result);
  });

export default router;
