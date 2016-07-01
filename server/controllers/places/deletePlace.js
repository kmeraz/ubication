import Place from '../../models/user.js';

const deletePlace = (user, myLatLng) => {
  Place.remove({
    userId: user,
    latitude: myLatLng.lat,
    longitude: myLatLng.lng,
  }, (err, place) => {
    if (err) {
      console.log('Error! The place could not be found for deletion', err);
      return err;
    } else {
      console.log('Success! Place deleted');
      return place;
    }
  });
};

export default deletePlace;
