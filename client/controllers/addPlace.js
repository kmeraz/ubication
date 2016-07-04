import axios from 'axios';

const addPlace = (user, currentLocation, note) => {
  console.log('user, currentLoc, note', user, currentLocation, note);
  axios.post('http://ubication.herokuapp.com/api/places', {
    facebookUserId: user.facebookUserId,
    currentLocation: {
      lat: currentLocation.lat,
      lng: currentLocation.lng,
    },
    note: note,
  })
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
};

export default addPlace;
