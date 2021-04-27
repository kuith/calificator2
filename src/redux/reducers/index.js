import { combineReducers } from 'redux';

import gruposReducer from './gruposReducer';
import alumnosReducer from './alumnosReducer';
import trimestresReducer from './trimestresReducer';
import selectedTrimestreReducer from './selectedTrimestreReducer';

export default combineReducers({
  grupos: gruposReducer,
  alumnos: alumnosReducer,
  trimestres: trimestresReducer,
  selectedTrimestre: selectedTrimestreReducer
});
