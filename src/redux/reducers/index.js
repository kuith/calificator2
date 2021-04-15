import { combineReducers } from 'redux';

import gruposReducer from './gruposReducer';
import alumnosReducer from './alumnosReducer';

export default combineReducers({
  grupos: gruposReducer,
  alumnos: alumnosReducer
});