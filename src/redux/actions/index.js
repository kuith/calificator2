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

export const selectTrimestre = trimestre => {
  return {
    type: typesClass.SELECTED_TRIMESTRE,
    payload: trimestre
  }
}

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

//////REALIZA ACTIONS /////////////////