import Place from '../../models/user.js';

const getPlaces = (user) => {
  Place.find({
    facebookUserId: user,
  }, (err, places) => {
    if (err) {
      console.log('error finding places for user:', user);
    } else {
      console.log('These are the places for the user', places);
      return places;
    }
  });
};

export default getPlaces;
