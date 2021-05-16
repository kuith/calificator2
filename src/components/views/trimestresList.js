import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {selectTrimestreId} from '../../redux/actions'

const TrimestresList = (props) => {
  const trimestres = Object.values(useSelector((state) => state.trimestres));
  const dispatch = useDispatch();
  const selectedTrimestreId = useSelector((state) => state.selectedTrimestreId);

  const selectTrimestreHandler = (tri) => {
    dispatch(selectTrimestreId(tri))
  }
 const listaTrimestres = trimestres.map(trimestre => (
    <button
      type="button"
      key={trimestre.id}
      className="btn btn-info boton"
      onClick={()=> selectTrimestreHandler(trimestre.id)}
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
