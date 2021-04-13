import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroup } from '../../../redux/actions';

import HeaderGrupo from './headerGrupo';


const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const dispatch = useDispatch();
  const grupo = (useSelector((state) => state.grupos[props.id]));
  
  useEffect(() => {
    dispatch(fetchGroup(props.id));
  }, []);
  
  //Tengo el grupo
  return (
    <>
      <div>
        <HeaderGrupo grupo={grupo}/>
      </div>
      <div>
        <table>
          Tabla alumnos/parciales
        </table>
      </div>
    </>
  );
}

export default GrupoContenedor;