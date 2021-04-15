/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

import  * as typesClass from '../types';

//En lugar de usar una aproximación de estado por array (devolviendo un array de grupos)
// lo vamos a hacer devolviendo un objeto, por eso el estado inicial es un objeto vacío.
export default (state = {}, action) => { 
  switch (action.type) {
    case typesClass.FETCH_ALUMNO:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.ADD_ALUMNO:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.UPDATE_ALUMNO:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.DELETE_ALUMNO:
      return _.omit(state, action.payload);
    case typesClass.FETCH_ALUMNOS:
      return {...state, ..._.mapKeys(action.payload, 'id')}
    default:
      return state;
  }
};