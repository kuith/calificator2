import React from 'react';
import { useSelector } from 'react-redux';
import {selectTrimestre} from '../../redux/actions'

const TrimestresList = (props) => {
  const trimestres = Object.values(useSelector((state) => state.trimestres));
  
  const listaTrimestres = trimestres.map(trimestre => (
    <button
      type="button"
      key={trimestre.id}
      className="btn btn-info boton"

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
