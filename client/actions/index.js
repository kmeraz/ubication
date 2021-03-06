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

  modalSetState: function(state) {
    return { type: types.SET_MODAL_STATE, state };
  },

  saveWithinModal: function(data) {
    return { type: types.SAVE_WITHIN_MODAL, data };
  },

  currentNoteText: function(currentNoteText) {
    return { type: types.CURRENT_NOTE_TEXT, currentNoteText };
  },

  changeView: function(view) {
    return { type: types.CHANGE_VIEW, view };
  },
};
