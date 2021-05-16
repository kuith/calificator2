import React, { useEffect }  from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchRealizasByAlumnoTrimestre
} from '../../redux/actions';

const ParcialesTabla = (props) => {

  const idSelectedTrimestre = (useSelector((state) => state.selectedTrimestreId));
  const dispatch = useDispatch();

  //Consulto los realizas (parciales del trimestre)
  useEffect(() => {
    dispatch(fetchRealizasByAlumnoTrimestre(idSelectedTrimestre, props.idAlumno));
  }, [idSelectedTrimestre]);

  const realizas = Object.values(useSelector((state) => state.realizas));
  console.log(realizas);
 
  //mapeo los realizas obtenidos
   const parcialesTrimestre = realizas.map(realiza => (
    <td key={realiza.id}>
       {realiza.nota}
       idAlumno: 
       {realiza.idAlumno}
       ---propsIdAlumno---
      {props.idAlumno}
    </td>
  )); 

  const noParciales = (
    <div className="table-warning">Selecione un trimestre</div>
  );

  const parciales = (idSelectedTrimestre === 0) ? noParciales : parcialesTrimestre;

  return (
    <div>
      {parciales}
    </div>
  )
}

export default ParcialesTabla;
