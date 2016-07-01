import { combineReducers } from 'redux';
import home from './homeReducer.js';
import savedPlaces from './savedPlaces.js';
import user from './user.js';


const rootReducer = combineReducers({
  home,
  savedPlaces,
  user,
});

export default rootReducer;
