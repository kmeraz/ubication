import * as types from '../constants/ActionTypes.js';

const initialState = [];

export default function home(state = initialState, action) {
  switch (action.type) {
    case types.ADD_PIN:
      return action.pin;
    default:
      return state;
  }
}
