import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";
//import { useSelector } from 'react-redux';

const AlumnosTable = (props) => {
  const idGrupo = props.grupo.id;
  const alumnos = props.alumnosData;
  //const alumnos = Object.values(useSelector((state) => state.alumnos));

  console.log("Alumnos desde la tabla: " + alumnos);
  console.log("idGrupo: " + idGrupo);

 /*  const alumnosD = alumnos.map(alumno => (
    <tr>
      <th scope="row"><BsFillTrashFill /></th>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellidos}</td>
    </tr>
  )); */

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
              {/* {alumnosD} */}
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