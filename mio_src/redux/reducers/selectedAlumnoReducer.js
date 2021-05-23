/* eslint-disable import/no-anonymous-default-export */
import  * as typesClass from '../types';

export default (selectedAlumno = null, action) => { 
  if (action.type === typesClass.SELECTED_ALUMNO) {
    return action.payload;
  }

  return selectedAlumno;
};