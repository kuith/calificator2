import axios from 'axios';
import * as typesClass from '../types';

/* export const fetchGrupos = () => {
  return async function (dispatch, getState) {
    const response = await axios.get("/grupos");

    dispatch({ type: 'FETCH_GRUPOS', payload: response })
  }  
} */
///lo de abajo es lo mismo simplificado


//////GROUP ACTIONS /////////////////

export const fetchGroups = () => async dispatch => {
  const response = await axios.get('/grupos');

  dispatch({ type: typesClass.FETCH_GROUPS, payload: response.data });
};

export const createGroup = formValues => async dispatch => {
  const response = await axios.post('/grupos', formValues);

  dispatch({ type: typesClass.ADD_GROUP, payload: response.data });

}

export const fetchGroup = (id) => async dispatch => {
  const response = await axios.get(`/grupos/${id}`);

  dispatch({ type: typesClass.FETCH_GROUP, payload: response.data });
}

export const updateGroup = (id, formValues) => async dispatch => {
  const response = await axios.put(`/grupos/${id}`, formValues);

  dispatch({ type: typesClass.UPDATE_GROUP, payload: response.data})
}

export const deleteGroup = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/grupos/${id}`);

  dispatch({ type: typesClass.DELETE_GROUP, payload: id });
}