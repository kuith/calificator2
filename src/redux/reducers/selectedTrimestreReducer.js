/* eslint-disable import/no-anonymous-default-export */
import  * as typesClass from '../types';

export default (selectedTrimestre = null, action) => { 
  if (action.type === typesClass.SELECTED_TRIMESTRE) {
    return action.payload;
  }

  return selectedTrimestre;
};