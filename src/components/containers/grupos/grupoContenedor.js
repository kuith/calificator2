import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroup } from '../../../redux/actions';

import HeaderGrupo from './headerGrupo';
import ParcialesContenedor from '../parciales/parcialesContenedor';


const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const dispatch = useDispatch();
  const grupo = (useSelector((state) => state.grupos[props.id]));
  
  useEffect(() => {
    dispatch(fetchGroup(props.id));
  }, []);
  
  const headerGrupo = (
    <HeaderGrupo grupo={grupo} />
  );

  const parcialesContenedor = (
    <ParcialesContenedor />
  )

  //Tengo el grupo
  return (
    <>
      {headerGrupo}
      {parcialesContenedor}
     
    </>
  );
}

export default GrupoContenedor;