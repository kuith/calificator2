import axios from 'axios';
import * as typesClass from '../types';

//////PARCIALES ACTIONS /////////////////

export const fetchParciales = () => async dispatch => {
  const response = await axios.get('/parciales');

  dispatch({ type: typesClass.FETCH_PARCIALES, payload: response.data });
};

export const createParcial = formValues => async dispatch => {
  const response = await axios.post('/parciales', formValues);

  dispatch({ type: typesClass.ADD_PARCIAL, payload: response.data });

}

export const fetchParcial = (id) => async dispatch => {
  const response = await axios.get(`/parciales/${id}`);

  dispatch({ type: typesClass.FETCH_PARCIAL, payload: response.data });
}

export const updateParcial = (id, formValues) => async dispatch => {
  const response = await axios.put(`/parciales/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_PARCIAL, payload: response.data})
}

export const deleteParcial = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/parciales/${id}`);

  dispatch({ type: typesClass.DELETE_PARCIAL, payload: id });
}