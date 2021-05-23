/* eslint-disable import/no-anonymous-default-export */
import * as typesClass from '../types';

export default (selectedTrimestreId = 0, action) => { 
  if (action.type === typesClass.SELECTED_TRIMESTRE) {
    return action.payload;
  }

  return selectedTrimestreId;
};