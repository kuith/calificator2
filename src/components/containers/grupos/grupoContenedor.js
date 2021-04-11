import React, {useEffect} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchGroup } from '../../../redux/actions';


const GrupoContenedor = (props) => {
  //recibo el id del grupo
  const dispatch = useDispatch();
  const grupo = Object.values(useSelector((state) => state.grupos[props.id]));
  
  useEffect(() => {
    dispatch(fetchGroup(props.id));
  }, []);

  return (
    <div>
      El id del grupo es {props.id}
      
    </div>
  );
}

export default GrupoContenedor;