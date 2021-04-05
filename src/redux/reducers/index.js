import { combineReducers } from 'redux';

import gruposReducer from './gruposReducer';

export default combineReducers({
  grupos: gruposReducer
});