import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ParcialesContenedor from './parcialesContenedor';
import ParcialesCabecera from './parcialesCabecera';

const AlumnosContenedor = (props) => {

  const [alumnosGrupo, setAlumnosGrupo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/alumnos/grupos/${props.idGrupo}`);
     // console.log(result);
      setAlumnosGrupo(result.data);
    }; fetchData();
  }, [props.idGrupo]);

  
  const alumnosGrid = alumnosGrupo.map((alumno) => (
    <>

      <tr>
        <td>{alumno.nombre}</td>
        <td>{alumno.apellidos}</td>
        <ParcialesContenedor idAlumno={alumno.id} idTrimestre={props.idTrimestre}/>
      </tr>
    </>
  ));

  return (
    <>
      <div className="container">
        <table>
           <tr>
            <td>nombre</td>
            <td>Apellidos</td>
          </tr>
          {alumnosGrid}
        </table>
      </div>
      </>
  );
}

export default AlumnosContenedor;