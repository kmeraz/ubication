import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENT_LOCATION:
      return action.currentLocation;
    case types.UPDATE_CURRENT_LOCATION:
      return action.place;
    case types.MODAL_SUBMIT:
      return action.data;
    case types.CURRENT_NOTE_TEXT:
      return Object.assign({}, state, {
        currentNoteText: action.currentNoteText,
      });
    default:
      return state;
  }
}
