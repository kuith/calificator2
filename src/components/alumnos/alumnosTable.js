import React from 'react';
import AlumnoRow from './alumnoRow.js';

const AlumnosTable = ({ alumnos, realizas }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellidos</th>
          </tr>
        </thead>
        <tbody>
          {alumnos.map(({ id, nombre, apellidos }) => (
            <AlumnoRow
              key = { `alumnoRow_item_${ id }`}
              id = { id }
              nombre = { nombre }
              apellidos = { apellidos }
              realizas = { realizas.filter( ({idAlumno}) => idAlumno === id) }
            ></AlumnoRow>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AlumnosTable;