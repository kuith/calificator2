import React from 'react';
import TrimestresList from '../../views/trimestresList'

const HeaderGrupo = (props) => {
  //console.log("El grupo tiene id: " + props.grupo.id);
  return (
    <div className="row">
      <div className="col-4">
        Grupo: {props.grupo.curso} {props.grupo.nombre}, {props.grupo.anio}
      </div>
      <div className="col-8">
        <TrimestresList/>
      </div>
    </div>
  )
}

export default HeaderGrupo;