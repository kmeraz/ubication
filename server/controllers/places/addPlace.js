import Place from '../../models/place.js';

const addPlace = (user, myLatLng, note) => {
  Place.create({
    facebookUserId: user,
    latitude: myLatLng.lat,
    longitude: myLatLng.lng,
    note: note,
  }, (err, place) => {
    if (err) {
      console.log('Error! We were unable to add your place to the db', err);
      return err;
    } else {
      console.log('Success! Place created and added to db', place);
      return place;
    }
  });
};

export default addPlace;
