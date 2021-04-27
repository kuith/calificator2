import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

const AlumnosTable = (props) => {
  const idGrupo = props.grupo.id;
  const alumnos = Object.values(useSelector((state) => state.alumnos));

  const alumnosData = alumnos.map(alumno => (
    <tr key={alumno.id}>
      <th scope="row"><BsFillTrashFill /></th>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellidos}</td>
    </tr>
  ));

  const alumnosTable = (
     <table className ="table table-striped">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
              </tr>
            </thead>
            <tbody>
              {alumnosData}
            </tbody>
    </table>
  );

  return (
    <div>
      {alumnosTable}
    </div>
  )
}

export default AlumnosTable;