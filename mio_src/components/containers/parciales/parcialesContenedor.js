import React from 'react';


import AlumnosTabla from '../../views/alumnosTabla';


const ParcialesContenedor = (props) => {
 //console.log("El grupo tiene id: " + props.grupo.id);
  
  return (
    <div className="row">
      <div className="col-4">
        <div className="tablaParciales">
          <AlumnosTabla />
        </div>
      </div>
    </div>
  )
}

export default ParcialesContenedor;