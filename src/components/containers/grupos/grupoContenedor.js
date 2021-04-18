import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchGroup, fetchAlumnosByGrupo } from '../../../redux/actions';

import HeaderGrupo from './headerGrupo';
import ParcialesContenedor from '../parciales/parcialesContenedor';


const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const dispatch = useDispatch();
  const grupo = (useSelector((state) => state.grupos[props.id]));
  const alumnos = Object.values(useSelector((state) => state.alumnos));
  

  console.log("Alumnos desde el contenedor: " + alumnos);
    
  useEffect(() => {
    dispatch(fetchGroup(props.id));
  }, []);

  useEffect(() => {
    dispatch(fetchAlumnosByGrupo(props.id));
  }, [props.id]);
  
  const headerGrupo = (
    <HeaderGrupo grupo={grupo} alumnosData={alumnos}/>
  );

  const parcialesContenedor = (
    <ParcialesContenedor grupo={grupo} alumnosData={alumnos}/>
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