import React from 'react';
import TrimestresList from '../../views/trimestresList'

const HeaderGrupo = (props) => {
  return (
    <div>
      <div>
        Grupo: {props.grupo.curso} {props.grupo.nombre}, {props.grupo.anio}
      </div>
       <TrimestresList/>
    </div>
  )
}

export default HeaderGrupo;