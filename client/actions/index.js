import * as types from '../constants/ActionTypes.js';


module.exports = {

  savePlace: function(data) {
    return { type: types.SAVE_PLACE, data };
  },

  updatePlaces: function(data) {
    return { type: types.UPDATE_PLACES, data };
  },

  updateCurrentLocation: function(place) {
    return { type: types.UPDATE_CURRENT_LOCATION, place };
  },
};
