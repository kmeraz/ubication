import { combineReducers } from 'redux';
import home from './home.js';
import savedPlaces from './savedPlaces.js';
import user from './user.js';
import modalState from './modalState.js';

const rootReducer = combineReducers({
  home,
  savedPlaces,
  user,
  modalState,
});

export default rootReducer;
