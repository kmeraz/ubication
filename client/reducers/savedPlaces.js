import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function savedPlaces(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PLACES:
      return action.places;
    default:
      return state;
  }
}
