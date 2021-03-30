import axios from 'axios';

/* export const fetchGrupos = () => {
  return async function (dispatch, getState) {
    const response = await axios.get("/grupos");

    dispatch({ type: 'FETCH_GRUPOS', payload: response })
  }  
} */
///lo de abajo es lo mismo simplificado


export const fetchGrupos = () => async dispatch => {
  const response = await axios.get("/grupos");

  dispatch({ type: 'FETCH_GRUPOS', payload: response })
};