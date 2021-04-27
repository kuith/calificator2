import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  fetchGroup,
  fetchAlumnosByGrupo,
  fetchTrimestres
} from '../../../redux/actions';

import HeaderGrupo from './headerGrupo';
import ParcialesContenedor from '../parciales/parcialesContenedor';


const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const dispatch = useDispatch();
  const grupo = (useSelector((state) => state.grupos[props.id]));
       
  useEffect(() => {
    dispatch(fetchGroup(props.id));
  }, []);

  useEffect(() => {
    dispatch(fetchAlumnosByGrupo(props.id));
  }, [props.id]);
  
  useEffect(() => {
    dispatch(fetchTrimestres());
  }, []);

  const headerGrupo = (
    <HeaderGrupo grupo={grupo} />
  );

  const parcialesContenedor = (
    <ParcialesContenedor grupo={grupo}/>
  )

 // console.log(alumnos);
  //Tengo el grupo
  return (
    <>
      {headerGrupo}
      {parcialesContenedor}
     
    </>
  );
}

export default GrupoContenedor;