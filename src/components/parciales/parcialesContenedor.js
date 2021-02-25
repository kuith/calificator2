import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParcialesContenedor = (props) => {

  const[parciales, setParciales] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/realizas/parciales/alumnos/${props.idTrimestre}/${props.idAlumno}`);
      //console.log(props.idTrimestre);
      setParciales(result.data);
    }; fetchData();
  }, [props.idTrimestre]);

  const parcialesAlumno = parciales.map((parcial) => (
    <td>{parcial.nota}</td>
  ))

  return (
    <>
      <div className="container">
        {parcialesAlumno}
      </div>
      </>
  );
}

export default ParcialesContenedor;