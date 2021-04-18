import React from 'react';

import AlumnosTabla from '../../views/alumnosTabla';

const ParcialesContenedor = (props) => {
  return (
    <div className="row">
      <div className="col-4">
        <div className="tablaParciales">
          <AlumnosTabla grupo={props.grupo}/>
        </div>
      </div>
    </div>
  )
}

export default ParcialesContenedor;