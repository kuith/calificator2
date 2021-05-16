import axios from 'axios';
import * as typesClass from '../types';

//////REALIZA ACTIONS /////////////////

export const fetchRealizas = () => async dispatch => {
  const response = await axios.get('/realizas');

  dispatch({ type: typesClass.FETCH_REALIZAS, payload: response.data });
};

export const createRealiza = formValues => async dispatch => {
  const response = await axios.post('/realizas', formValues);

  dispatch({ type: typesClass.ADD_REALIZA, payload: response.data });
}

export const fetchRealiza = (id) => async dispatch => {
  const response = await axios.get(`/realizas/${id}`);

  dispatch({ type: typesClass.FETCH_REALIZA, payload: response.data });
}

export const fetchRealizasByTrimestre = (idTrimestre) => async dispatch => {
  const response = await axios.get(`/realizas/parciales/${idTrimestre}`);
  
  dispatch({ type: typesClass.FETCH_REALIZA_BY_TRIMESTRE, payload: response.data });
}

export const fetchRealizasByTrimestreGrupo = (idTrimestre, idGrupo) => async dispatch => {
  const response = await axios.get(`/realizas/parciales/${idTrimestre}/${idGrupo}`);

  dispatch({ type: typesClass.FETCH_REALIZA_BY_TRIMESTRE_GRUPO, payload: response.data });
}

export const fetchRealizasByAlumnoTrimestre = (idTrimestre, idAlumno) => async dispatch => {
  const response = await axios.get(`/realizas/parciales/alumnos/${idTrimestre}/${idAlumno}`);

  dispatch({ type: typesClass.FETCH_REALIZA_BY_ALUMNO_TRIMESTRE, payload: response.data });
}

export const updateRealizas = (id, formValues) => async dispatch => {
  const response = await axios.put(`/realizas/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_REALIZA, payload: response.data})
}

export const deleteRealiza = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/realizas/${id}`);

  dispatch({ type: typesClass.DELETE_REALIZA, payload: id });
}