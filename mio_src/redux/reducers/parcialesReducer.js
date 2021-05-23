/* eslint-disable import/no-anonymous-default-export */
import _ from 'lodash';

import  * as typesClass from '../types';

export default (state = {}, action) => { 
  switch (action.type) {
    case typesClass.FETCH_PARCIAL:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.ADD_PARCIAL:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.UPDATE_PARCIAL:
      return { ...state, [action.payload.id]: action.payload };
    case typesClass.DELETE_PARCIAL:
      return _.omit(state, action.payload);
    case typesClass.FETCH_PARCIALES:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    default:
      return state;
  }
};