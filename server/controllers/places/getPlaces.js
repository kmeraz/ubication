import Place from '../../models/place.js';

const getPlaces = (user) => {
  return new Promise((resolve, reject) => {
    Place.find({
      facebookUserId: user,
    }, (err, places) => {
      if (err) {
        console.log('error finding places for user:', user);
        reject(err);
      } else {
        console.log('These are the places for the useringetPlaces', places);
        console.log('user', user);
        resolve(places);
      }
    });
  });
};

export default getPlaces;
