import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchGroup,
  fetchAlumnosByGrupo,
  fetchTrimestres,
  selectTrimestreId
} from '../redux/actions';

import HeaderGrupo from '../components/grupos/headerGrupo.js';
import ParcialesContainer from './parcialesContainer';

const GrupoContainer = ({ id }) => { 
  const dispatch = useDispatch();
  const grupo = useSelector( state => state.grupos[id] );
  const trimestres = Object.values(useSelector( state => state.trimestres ));
  const loading = !(grupo && Array.isArray(trimestres) && trimestres.length > 0);

  useEffect(        
    () => dispatch(fetchGroup(id)),
    []
  );

  useEffect(
    // retardo a modo de test solo para comprobar que se ve el "...loading..."
    // en caso de que la base de datos tarde mucho en servir los ficheros. 
    () => setTimeout( () => dispatch(fetchTrimestres()), 3000),

    // este sería el comando normal sin retardo artificial
    // () => dispatch(fetchTrimestres()),
    []
  );

  useEffect(
    () => dispatch(fetchAlumnosByGrupo(id)), 
    [id]
  );

  if (loading) {
    return <div><i>...cargando datos, por favor espere...</i></div>;
  }

  return (
    <React.Fragment>
      <HeaderGrupo
          grupo = { grupo }
          trimestres = { trimestres }
          onSelectTrimestre = { id => dispatch(selectTrimestreId(id)) }
          onAddTrimestre = { () => alert("Add trimestre clicked!") }
        ></HeaderGrupo>
        <ParcialesContainer grupoId = { id } ></ParcialesContainer>
    </React.Fragment>
  );
}

export default GrupoContainer;