import React from 'react';
import { BsFillTrashFill } from "react-icons/bs";

import ParcialesAlumno from './parcialesAlumno';

const AlumnoRow = ({id, nombre, apellidos, realizas}) => (
    <tr key = { `alumno_row_${id}` }>
      <th scope = "row"><BsFillTrashFill /></th>
      <td>{ nombre }</td>
      <td>{ apellidos }</td>
      <td><ParcialesAlumno realizas = { realizas } /></td>
    </tr>
);

export default AlumnoRow;