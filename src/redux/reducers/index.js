import { combineReducers } from 'redux';

import gruposReducer from './gruposReducer';
import alumnosReducer from './alumnosReducer';
import trimestresReducer from './trimestresReducer';
import selectedTrimestreReducer from './selectedTrimestreReducer';
import realizasReducer from './realizasReducer';
import parcialesRecuder from './parcialesReducer';

export default combineReducers({
  grupos: gruposReducer,
  alumnos: alumnosReducer,
  trimestres: trimestresReducer,
  selectedTrimestre: selectedTrimestreReducer,
  realizas: realizasReducer,
  parciales: parcialesRecuder
});
