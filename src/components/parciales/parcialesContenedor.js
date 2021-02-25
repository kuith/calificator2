import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParcialesContenedor = (props) => {

  const [alumnosGrupo, setAlumnosGrupo] = useState([]);
  const [alumno, setAlumno] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/alumnos/grupos/${props.idGrupo}`);
      console.log(result);
      setAlumnosGrupo(result.data);
    }; fetchData();
  }, [props.idGrupo]);

  

  const alumnosGrid = alumnosGrupo.map((alumno) => (
    <tr>
      <td>{alumno.nombre}</td>
      <td>{alumno.apellidos}</td>
    </tr>
  ));

  

  return (
    <>
      <div className="container">
        <table>
          {alumnosGrid}
        </table>
      </div>
      </>
  );
}

export default ParcialesContenedor;