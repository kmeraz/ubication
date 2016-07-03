import { combineReducers } from 'redux';
import home from './home.js';
import savedPlaces from './savedPlaces.js';
import modalState from './modalState.js';
import user from './user.js';
import view from './view.js';

const rootReducer = combineReducers({
  home,
  savedPlaces,
  modalState,
  user,
  view,
});

export default rootReducer;
