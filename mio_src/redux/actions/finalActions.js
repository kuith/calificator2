import axios from 'axios';
import * as typesClass from '../types';

//////FINAL ACTIONS /////////////////

export const fetchFinales = () => async dispatch => {
  const response = await axios.get('/finales');

  dispatch({ type: typesClass.FETCH_PARCIALES, payload: response.data });
};

export const createFinal = formValues => async dispatch => {
  const response = await axios.post('/finales', formValues);

  dispatch({ type: typesClass.ADD_FINAL, payload: response.data });

}

export const fetchFinal = (id) => async dispatch => {
  const response = await axios.get(`/finales/${id}`);

  dispatch({ type: typesClass.FETCH_FINAL, payload: response.data });
}

export const updateFinal = (id, formValues) => async dispatch => {
  const response = await axios.put(`/finales/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_FINAL, payload: response.data})
}

export const deleteFinal = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/finales/${id}`);

  dispatch({ type: typesClass.DELETE_FINAL, payload: id });
}

export const fetchFinalByTrimestreAlumno = (idTrimestre, idAlumno) => async dispatch => {
  const response = await axios.get(`/finales/trirmestrealumno/${idTrimestre}/${idAlumno}`);

  dispatch({ type: typesClass.FETCH_FINALES_BY_TRIMESTRE_ALUMNO, payload: response.data });
}