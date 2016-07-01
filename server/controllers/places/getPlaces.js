import Place from '../../models/user.js';

const getPlaces = (user) => {
  Place.find({
    userId: user,
  }, (err, places) => {
    if (err) {
      console.log('No places were found for the user');
      return places;
    } else {
      console.log('These are the places for the user', places);
      return places;
    }
  });
};

export default getPlaces;
