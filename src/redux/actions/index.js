import axios from 'axios';
import {
  FETCH_GROUPS,
  FETCH_GROUP,
  ADD_GROUP,
  UPDATE_GROUP,
  DELETE_GROUP
} from '../types';

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

  dispatch({ type: FETCH_GROUPS, payload: response.data });
};

export const createGroup = formValues => async dispatch => {
  const response = await axios.post('/grupos', formValues);

  dispatch({ type: ADD_GROUP, payload: response.data });

}

export const fetchGroup = (id) => async dispatch => {
  const response = await axios.get(`/grupos/${id}`);

  dispatch({ type: FETCH_GROUP, payload: response.data });
}

export const updateGroup = (id, formValues) => async dispatch => {
  const response = await axios.put(`/grupos/${id}`, formValues);

  dispatch({ type: UPDATE_GROUP, payload: response.data})
}

export const deleteGroup = (id) => async dispatch => {
  //no hay response porque no devuelve nada
  await axios.delete(`/grupos/${id}`);

  dispatch({ type: DELETE_GROUP, payload: id });
}

