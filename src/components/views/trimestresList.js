import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectTrimestre} from '../../redux/actions'

const TrimestresList = (props) => {
  const trimestres = Object.values(useSelector((state) => state.trimestres));
  const dispatch = useDispatch();
  
  const listaTrimestres = trimestres.map(trimestre => (
    <button
      type="button"
      key={trimestre.id}
      className="btn btn-info boton"
      onClick={()=> dispatch(selectTrimestre(trimestre))}
    >{trimestre.nombre}</button>
  ));

  const addTrimestre = <button type="button" className="btn btn-info boton">Nuevo Trimestre</button>;
  
  return (
    <div>
      {listaTrimestres}
      {addTrimestre}
    </div>
  )
}

export default TrimestresList;
