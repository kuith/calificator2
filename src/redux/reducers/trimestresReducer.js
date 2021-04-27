/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

import  * as typesClass from '../types';

export default (state = {}, action) => { 
  switch (action.type) {
    case typesClass.FETCH_TRIMESTRE:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.ADD_TRIMESTRE:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.UPDATE_TRIMESTRE:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.DELETE_TRIMESTRE:
      return _.omit(state, action.payload);
    case typesClass.FETCH_TRIMESTRES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};