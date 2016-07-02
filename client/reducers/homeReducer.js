import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.GET_CURRENT_LOCATION:
      return action.currentLocation;
    case types.UPDATE_CURRENT_LOCATION:
      return action.place;
    case types.SET_MODAL_STATE:
      return Object.assign({}, state, {
        modalState: action.state,
      });
    default:
      return state;
  }
}
