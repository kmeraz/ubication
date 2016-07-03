import * as types from '../constants/ActionTypes.js';

const initialState = {};

export default function view(state = initialState, action) {
  switch (action.type) {
    case types.CHANGE_VIEW:
      return action.view;
    default:
      return state;
  }
}
