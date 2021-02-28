import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ParcialesContenedor = (props) => {

  const[parciales, setParciales] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/realizas/parciales/${props.idTrimestre}/${props.idGrupo}`);
      //console.log(props.idTrimestre);
      setParciales(result.data);
    }; fetchData();
  }, [props.idTrimestre]);

  const parcialesAlumno = parciales.map((parcial) => (
    <td>{parcial.id}</td>
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