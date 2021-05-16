import axios from 'axios';
import * as typesClass from '../types';

//////ALUMNOS ACTIONS /////////////////

export const fetchAlumnos = () => async dispatch => {
  const response = await axios.get('/alumnos');

  dispatch({ type: typesClass.FETCH_ALUMNOS, payload: response.data });
};

export const createAlumno = formValues => async dispatch => {
  const response = await axios.post('/alumnos', formValues);

  dispatch({ type: typesClass.ADD_ALUMNO, payload: response.data });
}

export const fetchAlumno = (id) => async dispatch => {
  const response = await axios.get(`/alumnos/${id}`);

  dispatch({ type: typesClass.FETCH_ALUMNO, payload: response.data });
}

export const updateAlumno = (id, formValues) => async dispatch => {
  const response = await axios.put(`/alumnos/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_ALUMNO, payload: response.data})
}

export const deleteAlumno = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/alumnos/${id}`);

  dispatch({ type: typesClass.DELETE_ALUMNO, payload: id });
}

export const fetchAlumnosByGrupo = (idGrupo) => async dispatch => {
  const response = await axios.get(`/alumnos/grupos/${idGrupo}`);
  
  dispatch({ type: typesClass.FETCH_ALUMNOS_BY_GROUP, payload: response.data });
}

export const selectAlumno = alumno => {
  return {
    type: typesClass.SELECTED_ALUMNO,
    payload: alumno
  }
}