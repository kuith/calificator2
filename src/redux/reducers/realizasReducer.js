/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

import * as typesClass from '../types';

/* const realizasDefecto = {
  id: 0,
  idAlumno: 0,
  idParcial: 0,
  idTrimestre: 0,
  nota: 0
 } */

export default (state = {}, action) => { 
  switch (action.type) {
    case typesClass.FETCH_REALIZA:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.ADD_REALIZA:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.UPDATE_REALIZA:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.DELETE_REALIZA:
      return _.omit(state, action.payload);
    case typesClass.FETCH_REALIZAS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case typesClass.FETCH_REALIZA_BY_TRIMESTRE:
      return { ..._.mapKeys(action.payload, 'id') };
    case typesClass.FETCH_REALIZA_BY_TRIMESTRE_GRUPO:
      return { ..._.mapKeys(action.payload, 'id') };
    case typesClass.FETCH_REALIZA_BY_ALUMNO_TRIMESTRE:
      return { ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};