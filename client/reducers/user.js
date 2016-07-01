import * as types from '../constants/ActionTypes.js';

const initialState = {
  fbUserId: null,
  firstName: null,
  lastName: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
  default:
    return state;
  }
}