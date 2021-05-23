import React from 'react';
import TrimestresList from './trimestresList'

const HeaderGrupo = ({ grupo, trimestres, onSelectTrimestre, onAddTrimestre }) => {
  return (
    <div className="row">
      <div className="col-4">
        Grupo: { grupo.curso } { grupo.nombre }, { grupo.anio }
      </div>
      <div className="col-8">
        <TrimestresList 
          trimestres = { trimestres } 
          onSelectTrimestre = { onSelectTrimestre }
          onAddTrimestre = { onAddTrimestre }
        ></TrimestresList>
      </div>
    </div>
  )
}

export default HeaderGrupo;