import axios from 'axios';

const getPlaces = (user) => {
  axios.get('http://localhost:8080/api/places', {
    facebookUserId: user.facebookUserId,
  })
  .then((response) => {
    console.log('this is response in getPlaces client', response);
    return response;
  })
  .catch((err) => {
    console.log('this is error within getPlaces client-side', err);
  });
};

export default getPlaces;
