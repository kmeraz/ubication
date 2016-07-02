import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function modalState(state = initialState, action) {
  switch (action.type) {
    case types.SET_MODAL_STATE:
      return action.state;
    default:
      return state;
  }
}
