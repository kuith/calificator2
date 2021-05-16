import axios from 'axios';
import * as typesClass from '../types';

//////TRIMESTRES ACTIONS /////////////////

export const fetchTrimestres = () => async dispatch => {
  const response = await axios.get('/trimestres');

  dispatch({ type: typesClass.FETCH_TRIMESTRES, payload: response.data });
};

export const createTrimestre = formValues => async dispatch => {
  const response = await axios.post('/trimestres', formValues);

  dispatch({ type: typesClass.ADD_TRIMESTRE, payload: response.data });

}

export const fetchTrimestre = (id) => async dispatch => {
  const response = await axios.get(`/trimestres/${id}`);

  dispatch({ type: typesClass.FETCH_TRIMESTRE, payload: response.data });
}

export const updateTrimestre = (id, formValues) => async dispatch => {
  const response = await axios.put(`/trimestres/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_TRIMESTRE, payload: response.data})
}

export const deleteTrimestre = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/trimestres/${id}`);

  dispatch({ type: typesClass.DELETE_TRIMESTRE, payload: id });
}

export const selectTrimestreId = idTrimestre => {
  return {
    type: typesClass.SELECTED_TRIMESTRE,
    payload: idTrimestre
  }
}